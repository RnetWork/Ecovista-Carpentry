#!/usr/bin/env python3
"""
Scans the Claude tool-results directory for Drive download responses,
decodes base64 HEIC content, converts to JPEG, and saves to public/images/.
Run from repo root after all mcp download_file_content calls complete.
"""
import base64, json, pathlib, sys, re

from PIL import Image
import pillow_heif
pillow_heif.register_heif_opener()

TOOL_RESULTS_DIR = pathlib.Path(
    "/root/.claude/projects/-home-user-PaoV2"
    "/39977e06-4755-5a18-89f6-8a2edf558391/tool-results"
)
OUT_ROOT = pathlib.Path("public/images")
OUT_ROOT.mkdir(parents=True, exist_ok=True)

# Slug-map: original Drive filename → descriptive name + bucket guess
# Populated automatically; update manually after triage.
SLUG_OVERRIDES: dict[str, tuple[str, str]] = {
    # "IMG_XXXX.HEIC": ("descriptive-name", "finished"|"process"),
}

def slugify(title: str, idx: int) -> str:
    stem = pathlib.Path(title).stem
    s = re.sub(r"[^a-zA-Z0-9]+", "-", stem).strip("-").lower()
    return f"{idx:02d}-{s}"

def convert_file(json_path: pathlib.Path, idx: int) -> dict | None:
    try:
        data = json.loads(json_path.read_text())
    except Exception:
        return None

    if data.get("mimeType") not in ("image/heif", "image/heic"):
        return None

    title = data.get("title", "unknown.HEIC")
    raw_bytes = base64.b64decode(data["content"])

    # Determine output slug + bucket
    if title in SLUG_OVERRIDES:
        name, bucket = SLUG_OVERRIDES[title]
    else:
        name   = slugify(title, idx)
        bucket = "finished"   # default — review and move manually

    out_dir = OUT_ROOT / bucket
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{name}.jpg"

    if out_path.exists():
        return {"title": title, "out": str(out_path), "status": "skipped"}

    tmp = pathlib.Path(f"/tmp/ev-{title}")
    tmp.write_bytes(raw_bytes)
    try:
        img = Image.open(tmp)
        w, h = img.size
        img.convert("RGB").save(out_path, "JPEG", quality=88, optimize=True)
        tmp.unlink(missing_ok=True)
        kb = out_path.stat().st_size // 1024
        return {"title": title, "out": str(out_path), "size": w, "status": "ok", "kb": kb}
    except Exception as e:
        tmp.unlink(missing_ok=True)
        return {"title": title, "status": f"FAIL: {e}"}

def main():
    if not TOOL_RESULTS_DIR.exists():
        sys.exit(f"Tool results dir not found: {TOOL_RESULTS_DIR}")

    pattern = "*download_file_content*.txt"
    files = sorted(TOOL_RESULTS_DIR.glob(pattern))
    print(f"Found {len(files)} download tool result files\n")

    results, ok, skip, fail = [], 0, 0, 0
    for idx, f in enumerate(files, 1):
        r = convert_file(f, idx)
        if r is None:
            continue
        results.append(r)
        if r["status"] == "ok":
            ok += 1
            print(f"  ✓ [{idx:02d}] {r['title']} → {r['out']}  ({r.get('kb','?')} KB)")
        elif r["status"] == "skipped":
            skip += 1
            print(f"  ~ [{idx:02d}] {r['title']} already exists, skipped")
        else:
            fail += 1
            print(f"  ✗ [{idx:02d}] {r['title']} — {r['status']}")

    print(f"\n─────────────────────────────────────")
    print(f"Converted : {ok}")
    print(f"Skipped   : {skip}")
    print(f"Failed    : {fail}")
    print(f"\nAll images land in public/images/finished/ by default.")
    print("Move any process/in-progress shots to public/images/process/ manually.")

    report_path = pathlib.Path("scripts/asset-report.json")
    report_path.write_text(json.dumps({"images": results}, indent=2))
    print(f"Report saved → {report_path}")

if __name__ == "__main__":
    main()
