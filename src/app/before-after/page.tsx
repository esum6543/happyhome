"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Img = { src: string; alt: string };
type Card = { title: string; before: Img[]; after: Img[] };

export default function BeforeAfterPage() {
  const cards: Card[] = useMemo(
    () => [
      {
        title: "Closet Organizing",
        before: [
          { src: "/gallery/before-after/IMG_3729.JPEG", alt: "Closet before 1" },
          { src: "/gallery/before-after/IMG_3730.JPEG", alt: "Closet before 2" },
        ],
        after: [
          { src: "/gallery/before-after/IMG_3735.JPEG", alt: "Closet after 1" },
          { src: "/gallery/before-after/IMG_3737.JPEG", alt: "Closet after 2" },
        ],
      },
      {
        title: "Pantry Refresh",
        before: [{ src: "/gallery/before-after/towels.png", alt: "Pantry before" }],
        after: [{ src: "/gallery/logos/enelalogo.png", alt: "Pantry after" }],
      },
    ],
    []
  );

  // Flatten all images so the lightbox can swipe through everything
  const allImages = useMemo(() => {
    const arr: (Img & { group: string; label: "Before" | "After" })[] = [];
    for (const card of cards) {
      for (const img of card.before) arr.push({ ...img, group: card.title, label: "Before" });
      for (const img of card.after) arr.push({ ...img, group: card.title, label: "After" });
    }
    return arr;
  }, [cards]);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const isOpen = openIndex !== null;

  const goPrev = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex - 1 + allImages.length) % allImages.length);
  };

  const goNext = () => {
    if (openIndex === null) return;
    setOpenIndex((openIndex + 1) % allImages.length);
  };

  // ESC + arrow keys + prevent body scroll while open
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, openIndex, allImages.length]);

  // Swipe handling (mobile)
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    startX.current = null;
    startY.current = null;

    // Only treat as swipe if mostly horizontal and big enough
    if (Math.abs(dx) < 50) return;
    if (Math.abs(dy) > Math.abs(dx) * 0.8) return;

    if (dx < 0) goNext(); // swipe left
    else goPrev(); // swipe right
  };

  const openBySrc = (src: string) => {
    const idx = allImages.findIndex((x) => x.src === src);
    if (idx >= 0) setOpenIndex(idx);
  };

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Before &amp; After</h1>
        <p className="mt-3 text-white/80">
          A few transformations — click/tap any photo for full-screen. Swipe left/right on mobile.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {cards.map((card) => (
            <section
              key={card.title}
              className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur"
            >
              <h2 className="text-lg font-medium text-white">{card.title}</h2>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {/* BEFORE */}
                <figure className="rounded-xl bg-black/20 p-3">
                  <figcaption className="text-sm text-white/80">Before</figcaption>
                  <div className="mt-2 grid gap-3">
                    {card.before.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => openBySrc(img.src)}
                        className="group overflow-hidden rounded-lg"
                        aria-label={`Open ${img.alt}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="aspect-[4/3] w-full object-cover object-top transition group-hover:opacity-90"
                        />
                      </button>
                    ))}
                  </div>
                </figure>

                {/* AFTER */}
                <figure className="rounded-xl bg-black/20 p-3">
                  <figcaption className="text-sm text-white/80">After</figcaption>
                  <div className="mt-2 grid gap-3">
                    {card.after.map((img) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => openBySrc(img.src)}
                        className="group overflow-hidden rounded-lg"
                        aria-label={`Open ${img.alt}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="aspect-[4/3] w-full object-cover object-top transition group-hover:opacity-90"
                        />
                      </button>
                    ))}
                  </div>
                </figure>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="relative w-full rounded-2xl bg-black/30 p-3 ring-1 ring-white/15 backdrop-blur"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div className="mb-2 flex items-center justify-between gap-2">
                <div className="text-sm text-white/80">
                  <span className="font-medium text-white">
                    {allImages[openIndex].group}
                  </span>{" "}
                  <span className="text-white/60">—</span>{" "}
                  <span className="text-white/80">{allImages[openIndex].label}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
                    aria-label="Previous image"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
                    aria-label="Next image"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
                    aria-label="Close"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* Image */}
              <img
                src={allImages[openIndex].src}
                alt={allImages[openIndex].alt}
                className="max-h-[85vh] w-full rounded-xl object-contain"
              />

              <p className="mt-2 text-center text-sm text-white/70">
                {allImages[openIndex].alt}
              </p>

              {/* Big tap zones (mobile-friendly) */}
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 md:block"
                aria-label="Previous"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20 md:block"
                aria-label="Next"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
