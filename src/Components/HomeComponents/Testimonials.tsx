import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { testimonials } from "../../Data/Testimonials";
import type { Testimonial, TestimonialRelationship } from "../../Types/Testimonial";

/* ---------- utilitaires ---------- */

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const useInView = <T extends Element>(threshold = 0.15) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

type Filter = "all" | TestimonialRelationship;
const FILTERS: Filter[] = ["all", "supervisor", "professor"];

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();

/* ---------- icônes ---------- */

const QuoteIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.4 4C5.9 5.6 3.5 8.9 3.5 12.9V19h6.4v-6.4H6.7c0-2.4 1.2-4.2 3.3-5.3L9.4 4Zm9.1 0c-3.5 1.6-5.9 4.9-5.9 8.9V19H19v-6.4h-3.2c0-2.4 1.2-4.2 3.3-5.3L18.5 4Z" />
  </svg>
);
const ArrowUpRightIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 7h10v10M7 17 17 7" />
  </svg>
);

/* ---------- une carte ---------- */

const TestimonialCard = ({
  item,
  lang,
  index,
  visible,
}: {
  item: Testimonial;
  lang: "fr" | "en";
  index: number;
  visible: boolean;
}) => {
  const { t } = useTranslation();

  return (
    <li
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-5 backdrop-blur transition-colors duration-300 hover:border-accent/60 sm:p-7 ${
        item.featured ? "border-accent/40 bg-accent/5" : "border-line bg-surface/70"
      } ${visible ? "hero-reveal" : "opacity-0"}`}
      style={delay(index * 100)}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="text-accent/70 transition-colors duration-300 group-hover:text-accent">
          <QuoteIcon />
        </span>
        <span className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-muted">
          {t(`testimonials.relationship.${item.relationship}`)}
        </span>
      </div>

      <blockquote
        className={`relative mt-4 flex-1 leading-relaxed ${
          item.featured ? "text-[0.95rem] sm:text-lg" : "text-[0.9rem] text-muted sm:text-base"
        }`}
      >
        {item.message[lang]}
      </blockquote>

      <figcaption className="relative mt-6 flex items-center gap-3 border-t border-line pt-5">
        <span
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 font-mono text-sm font-bold text-accent"
        >
          {initials(item.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold sm:text-base">{item.name}</span>
          <span className="block truncate text-xs text-muted sm:text-sm">
            {item.role[lang]} · {item.company}
          </span>
        </span>
      </figcaption>
    </li>
  );
};

/* ---------- section ---------- */

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const lang: "fr" | "en" = i18n.language?.startsWith("fr") ? "fr" : "en";

  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>(0.1);
  const [filter, setFilter] = useState<Filter>("all");

  const published = useMemo(
    () => testimonials.filter((x) => x.published).sort((a, b) => a.order - b.order),
    []
  );

  // Rien à afficher : on masque toute la section
  if (published.length === 0) return null;

  // Ne propose que les filtres qui ont au moins un résultat
  const filters = FILTERS.filter((f) => f === "all" || published.some((x) => x.relationship === f));
  const visible = published.filter((x) => filter === "all" || x.relationship === filter);

  return (
    <section
      id="testimonials"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      {/* En-tête */}
      <div ref={ref} className={inView ? "hero-reveal" : "opacity-0"} style={delay(0)}>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
          {t("testimonials.eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          {t("testimonials.title")}
        </h2>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t("testimonials.subtitle")}
        </p>

        {filters.length > 2 && (
          <div
            role="group"
            aria-label={t("testimonials.filtersLabel")}
            className="mt-6 flex flex-wrap gap-2"
          >
            {filters.map((f) => {
              const selected = f === filter;
              return (
                <button
                  key={f}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(f)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? "border-accent bg-accent text-accent-fg"
                      : "border-line bg-surface/60 text-muted hover:border-accent hover:text-inherit"
                  }`}
                >
                  {t(`testimonials.filters.${f}`)}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Cartes — key = relance l'animation à chaque changement de filtre */}
      <div ref={gridRef} className="mt-10 sm:mt-14">
        <ul key={filter} className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {visible.map((item, i) => (
            <TestimonialCard key={item.id} item={item} lang={lang} index={i} visible={gridInView} />
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div
        className={`mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur sm:mt-14 sm:flex-row sm:items-center sm:p-6 ${
          gridInView ? "hero-reveal" : "opacity-0"
        }`}
        style={delay(300)}
      >
        <p className="text-[0.95rem] font-medium sm:text-base">{t("testimonials.cta.text")}</p>
        <a
          href="#contact"
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:h-10 sm:w-auto"
        >
          {t("testimonials.cta.button")}
          <ArrowUpRightIcon />
        </a>
      </div>
    </section>
  );
};

export default Testimonials;