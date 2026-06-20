"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt: string };

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightbox(i)}
            className="group relative aspect-square overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`Open ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95"
          onClick={close}
        >
          {/* Counter */}
          <p className="absolute top-6 left-1/2 -translate-x-1/2 font-label text-[10px] uppercase tracking-[0.2em] text-white/40">
            {String(lightbox + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 font-label text-[10px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            Close ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 font-label text-[10px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors p-4"
            aria-label="Previous image"
          >
            ←
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="(min-width: 1024px) 80vw, 95vw"
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 font-label text-[10px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors p-4"
            aria-label="Next image"
          >
            →
          </button>

          {/* Alt caption */}
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-label text-[9px] uppercase tracking-[0.18em] text-white/30">
            {images[lightbox].alt}
          </p>
        </div>
      )}
    </>
  );
}
