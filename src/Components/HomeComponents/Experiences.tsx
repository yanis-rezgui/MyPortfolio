import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

import { experiences } from "../../Data/Experiences"; // adapte le chemin
import type { Experience } from "../../Types/Experience";
import type { Language } from "../../Types/Common";

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

const parseMonth = (value: string) => {
  const [y, m] = value.split("-").map(Number);
  return new Date(y, m - 1, 1);
};

const formatMonth = (value: string, lang: Language) =>
  new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" }).format(parseMonth(value));

// Durée inclusive en mois (juin → août = 3 mois)
const monthsBetween = (start: string, end: string | null) => {
  const s = parseMonth(start);
  const e = end ? parseMonth(end) : new Date();
  return Math.max(1, (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1);
};

const formatDuration = (months: number, t: TFunction) => {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  return [
    years > 0 && t("experience.years", { count: years }),
    rest > 0 && t("experience.months", { count: rest }),
  ]
    .filter(Boolean)
    .join(" ");
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`transition-transform duration-300 motion-reduce:transition-none ${
      open ? "rotate-180" : ""
    }`}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

/* ---------- une expérience ---------- */

const ExperienceItem = ({
  exp,
  lang,
  defaultOpen,
}: {
  exp: Experience;
  lang: Language;
  defaultOpen: boolean;
}) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLLIElement>();
  const [open, setOpen] = useState(defaultOpen);

  const panelId = `exp-${exp.id}`;
  const duration = formatDuration(monthsBetween(exp.startDate, exp.endDate), t);
  const range = `${formatMonth(exp.startDate, lang)} – ${
    exp.currentlyWorking || !exp.endDate ? t("experience.present") : formatMonth(exp.endDate, lang)
  }`;

  return (
    <li ref={ref} className="relative pl-9 sm:pl-14">
      {/* Pastille sur la ligne */}
      <span
        aria-hidden
        className={`absolute left-0 top-5 flex h-6 w-6 items-center justify-center rounded-full border bg-bg transition-colors duration-500 sm:top-7 sm:h-8 sm:w-8 ${
          inView ? "border-accent" : "border-line"
        }`}
      >
        {exp.currentlyWorking && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/30 motion-reduce:animate-none" />
        )}
        <span
          className={`relative h-2 w-2 rounded-full transition-colors duration-500 sm:h-2.5 sm:w-2.5 ${
            inView ? "bg-accent" : "bg-line"
          }`}
        />
      </span>

      <article
        className={`rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-colors duration-300 hover:border-accent/50 sm:p-7 ${
          inView ? "hero-reveal" : "opacity-0"
        }`}
        style={delay(0)}
      >
        {/* Dates + badges */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <p className="flex flex-wrap items-center gap-x-2 text-xs font-medium text-muted sm:text-sm">
            <span className="tabular-nums">{range}</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
            <span className="tabular-nums">{duration}</span>
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {exp.currentlyWorking && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {t("experience.current")}
              </span>
            )}
            <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-fg">
              {t(`experience.types.${exp.type}`)}
            </span>
          </div>
        </div>

        {/* Poste + entreprise */}
        <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
          {exp.role[lang]}
        </h3>
        <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          <span className="font-semibold text-accent">{exp.company}</span>
          {exp.location && (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
              <span className="text-muted">{exp.location}</span>
            </>
          )}
          {exp.workMode && (
            <>
              <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
              <span className="text-muted">{t(`experience.workModes.${exp.workMode}`)}</span>
            </>
          )}
        </p>

        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {exp.description[lang]}
        </p>

        {/* Missions : panneau déroulant */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:h-10 sm:w-auto"
        >
          {open
            ? t("experience.hideDetails")
            : t("experience.showDetails", { count: exp.responsibilities.length })}
          <ChevronIcon open={open} />
        </button>

        <div
          id={panelId}
          className={`grid transition-[grid-template-rows,opacity,visibility] duration-300 ease-out motion-reduce:transition-none ${
            open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col gap-3 pt-5">
              {exp.responsibilities.map((r, i) => (
                <li key={r.en} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-0.5 w-5 shrink-0 text-xs font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-muted">{r[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-6 border-t border-line pt-5">
          <p className="text-xs font-medium text-muted">{t("experience.technologies")}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {exp.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.7rem] font-medium text-muted sm:text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
};

/* ---------- section ---------- */

const Experiences = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const sorted = [...experiences].sort((a, b) => a.order - b.order);
  const { ref, inView } = useInView<HTMLDivElement>(0.1);

  // Progression de la ligne d'accent selon le scroll
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const el = listRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="experience"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref} className={inView ? "hero-reveal" : "opacity-0"} style={delay(0)}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("experience.title")}</h2>
        <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t("experience.subtitle")}
        </p>
      </div>

      <div className="relative mt-10 sm:mt-14">
        {/* Ligne de la timeline + progression */}
        <span
          aria-hidden
          className="absolute bottom-6 left-[11px] top-6 w-0.5 bg-line sm:bottom-8 sm:left-[15px] sm:top-8"
        />
        <span
          aria-hidden
          className="absolute bottom-6 left-[11px] top-6 w-0.5 origin-top bg-accent sm:bottom-8 sm:left-[15px] sm:top-8"
          style={{ transform: `scaleY(${progress})` }}
        />

        <ol ref={listRef} className="relative flex flex-col gap-5 sm:gap-8">
          {sorted.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} lang={lang} defaultOpen={i === 0} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experiences;