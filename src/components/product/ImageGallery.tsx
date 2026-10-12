"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ImageGalleryProps = {
  images: string[];
  alt: string;
};

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const close = useCallback(() => setLightbox(false), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length);
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, images.length, close]);

  if (images.length === 0) {
    return <div className="aspect-[4/5] bg-line/40" />;
  }

  const main = images[index] ?? images[0];

  return (
    <>
      <div className="space-y-5 lg:pe-4">
        <button
          type="button"
          className="group relative aspect-[4/5] w-full overflow-hidden bg-line/25 text-left ring-1 ring-line/60"
          onClick={() => setLightbox(true)}
          aria-label={alt}
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-tr from-blush/15 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            aria-hidden
          />
          <Image
            src={main}
            alt={alt}
            width={900}
            height={1125}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="relative z-[1] h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.02]"
            priority
          />
        </button>
        {images.length > 1 ? (
          <ul className="flex gap-2.5 overflow-x-auto pb-1">
            {images.map((src, i) => (
              <li key={src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative h-[5.5rem] w-[4.25rem] overflow-hidden border transition-colors ${
                    i === index
                      ? "border-ink/50 ring-1 ring-ink/10"
                      : "border-line/80 hover:border-ink/25"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`${alt} (${i + 1})`}
                    width={80}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/88 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className="absolute end-4 top-4 rounded-full border border-canvas/25 p-2 text-canvas transition-colors hover:border-canvas/50"
            onClick={close}
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="flex max-h-[90vh] w-full max-w-4xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={main}
              alt={alt}
              width={1200}
              height={1500}
              sizes="100vw"
              className="max-h-[90vh] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
