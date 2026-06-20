#!/usr/bin/env python3
"""
EcoVista Carpentry — Drive Asset Fetcher + Converter
-----------------------------------------------------
Downloads all HEIC images and MOV videos from the Drive Content folder,
converts them to web-ready formats, and organises them under public/.

Requirements:
  pip install pillow pillow-heif imageio imageio-ffmpeg requests

Usage:
  python3 scripts/fetch-drive-assets.py --token YOUR_OAUTH_TOKEN

Get a token at: https://developers.google.com/oauthplayground
  - Scope: https://www.googleapis.com/auth/drive.readonly
"""

import os, sys, argparse, json, subprocess, pathlib, hashlib, urllib.request, urllib.error

try:
    from PIL import Image
    import pillow_heif
    pillow_heif.register_heif_opener()
except ImportError:
    sys.exit("pip install pillow pillow-heif")

try:
    import imageio_ffmpeg
    FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()
except ImportError:
    FFMPEG = None

FOLDER_ID = "15OsB9FhMxqBPtGBbZf1b6E_p2UsIcghb"
BASE_URL   = "https://www.googleapis.com/drive/v3"

# Output dirs (relative to repo root — run from repo root)
DIR_FINISHED = pathlib.Path("public/images/finished")
DIR_PROCESS  = pathlib.Path("public/images/process")
DIR_VIDEO    = pathlib.Path("public/video")

for d in (DIR_FINISHED, DIR_PROCESS, DIR_VIDEO):
    d.mkdir(parents=True, exist_ok=True)

# ── Drive helpers ────────────────────────────────────────────────────────────

def drive_get(path, token, params=None):
    params = params or {}
    params["key"] = ""   # unused when using Bearer token
    qs = "&".join(f"{k}={v}" for k, v in params.items())
    url = f"{BASE_URL}/{path}?{qs}"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())

def drive_download(file_id, token, dest: pathlib.Path):
    url = f"{BASE_URL}/files/{file_id}?alt=media"
    req = urllib.request.Request(url, headers={"Authorization": f"Bearer {token}"})
    with urllib.request.urlopen(req) as r, open(dest, "wb") as f:
        while chunk := r.read(1 << 20):
            f.write(chunk)

def list_folder(folder_id, token):
    files, page_token = [], None
    while True:
        params = {
            "q": f"'{folder_id}' in parents",
            "fields": "nextPageToken,files(id,name,mimeType,size)",
            "pageSize": "100",
        }
        if page_token:
            params["pageToken"] = page_token
        data = drive_get("files", token, params)
        files.extend(data.get("files", []))
        page_token = data.get("nextPageToken")
        if not page_token:
            break
    return files

# ── Conversion helpers ───────────────────────────────────────────────────────

def heic_to_jpg(src: pathlib.Path, dest: pathlib.Path, quality=88):
    img = Image.open(src)
    img = img.convert("RGB")
    img.save(dest, "JPEG", quality=quality, optimize=True)

def mov_to_mp4(src: pathlib.Path, dest_mp4: pathlib.Path):
    if not FFMPEG:
        print(f"  [SKIP] ffmpeg not available — {src.name}")
        return
    poster = dest_mp4.with_suffix(".jpg")
    # Extract poster frame at 1 second
    subprocess.run([
        FFMPEG, "-y", "-ss", "1", "-i", str(src),
        "-vframes", "1", "-q:v", "3", str(poster)
    ], capture_output=True)
    # Re-encode to h264 MP4, target ~3 MB (2 Mbit/s)
    subprocess.run([
        FFMPEG, "-y", "-i", str(src),
        "-c:v", "libx264", "-crf", "28", "-preset", "fast",
        "-c:a", "aac", "-b:a", "128k",
        "-movflags", "+faststart",
        str(dest_mp4)
    ], capture_output=True)
    # WebM fallback
    dest_webm = dest_mp4.with_suffix(".webm")
    subprocess.run([
        FFMPEG, "-y", "-i", str(src),
        "-c:v", "libvpx-vp9", "-crf", "35", "-b:v", "0",
        "-c:a", "libopus",
        str(dest_webm)
    ], capture_output=True)

# ── Main ─────────────────────────────────────────────────────────────────────

FINISHED_KEYWORDS = ["finish", "complete", "staged", "clean", "exterior", "interior"]
PROCESS_KEYWORDS  = ["process", "site", "tool", "frame", "structure", "beam", "instal"]

def guess_bucket(name: str) -> str:
    n = name.lower()
    for kw in FINISHED_KEYWORDS:
        if kw in n:
            return "finished"
    for kw in PROCESS_KEYWORDS:
        if kw in n:
            return "process"
    return "finished"   # default — user should verify

def safe_stem(original: str, idx: int) -> str:
    stem = pathlib.Path(original).stem.lower().replace(" ", "-")
    return f"{idx:02d}-{stem}"

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--token", required=True, help="Google OAuth2 Bearer token")
    args = parser.parse_args()

    print(f"\n{'─'*60}")
    print("EcoVista Drive Asset Fetcher")
    print(f"{'─'*60}\n")

    print("Listing files in Drive Content folder...")
    files = list_folder(FOLDER_ID, args.token)
    heics = [f for f in files if f["mimeType"] == "image/heif"]
    movs  = [f for f in files if f["mimeType"] in ("video/quicktime", "video/mp4")]
    print(f"Found: {len(heics)} HEIC images, {len(movs)} video files\n")

    tmp = pathlib.Path("/tmp/ecovista-raw")
    tmp.mkdir(exist_ok=True)

    report = {"finished": [], "process": [], "video": [], "excluded": []}

    # ── Download + convert images ────────────────────────────────────────────
    print("Processing images...")
    for i, f in enumerate(heics, 1):
        stem  = safe_stem(f["name"], i)
        raw   = tmp / f["name"]
        bucket = guess_bucket(f["name"])
        out_dir = DIR_FINISHED if bucket == "finished" else DIR_PROCESS
        out_jpg = out_dir / f"{stem}.jpg"

        if out_jpg.exists():
            print(f"  [{i:02d}] {f['name']} → already converted, skipping")
            report[bucket].append(str(out_jpg))
            continue

        print(f"  [{i:02d}] Downloading {f['name']} ({int(f.get('size',0))//1024} KB)...", end=" ")
        try:
            drive_download(f["id"], args.token, raw)
            heic_to_jpg(raw, out_jpg)
            raw.unlink(missing_ok=True)
            print(f"→ {out_jpg}")
            report[bucket].append(str(out_jpg))
        except Exception as e:
            print(f"FAILED: {e}")
            report["excluded"].append(f"{f['name']}: {e}")

    # ── Download + convert videos ────────────────────────────────────────────
    print("\nProcessing videos...")
    for i, f in enumerate(movs, 1):
        stem   = safe_stem(f["name"], i)
        raw    = tmp / f["name"]
        out_mp4 = DIR_VIDEO / f"{stem}.mp4"

        if out_mp4.exists():
            print(f"  [{i:02d}] {f['name']} → already converted, skipping")
            report["video"].append(str(out_mp4))
            continue

        print(f"  [{i:02d}] Downloading {f['name']} ({int(f.get('size',0))//1024//1024} MB)...", end=" ")
        try:
            drive_download(f["id"], args.token, raw)
            print("converting...", end=" ")
            mov_to_mp4(raw, out_mp4)
            raw.unlink(missing_ok=True)
            print(f"→ {out_mp4}")
            report["video"].append(str(out_mp4))
        except Exception as e:
            print(f"FAILED: {e}")
            report["excluded"].append(f"{f['name']}: {e}")

    # ── Report ───────────────────────────────────────────────────────────────
    print(f"\n{'─'*60}")
    print("ASSET TRIAGE REPORT")
    print(f"{'─'*60}")
    print(f"✓ Finished work images : {len(report['finished'])}")
    print(f"✓ Process images       : {len(report['process'])}")
    print(f"✓ Videos converted     : {len(report['video'])}")
    print(f"✗ Excluded / failed    : {len(report['excluded'])}")
    if report["excluded"]:
        for x in report["excluded"]:
            print(f"  - {x}")
    print(f"\nNote: All images defaulted to 'finished' bucket.")
    print("Please review public/images/ and move any process/in-progress")
    print("shots to public/images/process/ manually.")
    with open("scripts/asset-report.json", "w") as fp:
        json.dump(report, fp, indent=2)
    print("\nFull report saved to scripts/asset-report.json")

if __name__ == "__main__":
    main()
