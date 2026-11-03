import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  SectionTitle,
  delay,
  sectionClass,
  useInView,
  useLang,
} from "./shared";

const ProjectGallery = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(null);

  const images = project.gallery;
  const total = images.length;

  // Lightbox : Échap, flèches, blocage du scroll
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % total));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + total) % total));
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, total]);

  if (total === 0) return null;

  const reveal = inView ? "hero-reveal" : "opacity-0";
  const alt = (i: number) => `${project.title[lang]} – ${t("projectDetail.gallery.image")} ${i + 1}`;

  return (
    <section className={sectionClass}>
      <div ref={ref}>
        <SectionTitle
          eyebrow={t("projectDetail.gallery.eyebrow")}
          title={t("projectDetail.gallery.title")}
          className={reveal}
          style={delay(0)}
        />

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
          {images.map((src, i) => (
            <li
              key={src}
              className={`${i === 0 && total % 2 === 1 ? "sm:col-span-2" : ""} ${reveal}`}
              style={delay(120 + i * 100)}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`${t("projectDetail.gallery.open")} – ${alt(i)}`}
                className="group block w-full overflow-hidden rounded-2xl border border-line bg-surface-2 transition-all duration-300 hover:border-accent/60 active:scale-[0.99] motion-reduce:active:scale-100 sm:rounded-3xl"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={src}
                    alt={alt(i)}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                  />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt(open)}
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/90 p-4 backdrop-blur-xl sm:p-8"
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            aria-label={t("projectDetail.gallery.close")}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:text-fg sm:right-6 sm:top-6"
          >
            <CloseIcon />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open - 1 + total) % total);
                }}
                aria-label={t("projectDetail.gallery.prev")}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent sm:left-6"
              >
                <ArrowLeftIcon />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen((open + 1) % total);
                }}
                aria-label={t("projectDetail.gallery.next")}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent sm:right-6"
              >
                <ArrowRightIcon />
              </button>
            </>
          )}

          <img
            src={images[open]}
            alt={alt(open)}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full rounded-2xl border border-line object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;