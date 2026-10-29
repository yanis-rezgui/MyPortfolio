import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { developmentProcess } from "../../Data/process";
import type { ProcessStep } from "../../Types/Process";
import type { Language } from "../../Types/Common";

/* ---------- utilitaires ---------- */

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const useInView = <T extends Element>(threshold = 0.1) => {
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

/* ---------- icônes (clé = ProcessStep["icon"]) ---------- */

const Svg = ({ children, size = 24 }: { children: ReactNode; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ICONS: Record<string, ReactNode> = {
  lightbulb: (
    <>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </>
  ),
  palette: (
    <>
      <circle cx="13.5" cy="6.5" r=".5" />
      <circle cx="17.5" cy="10.5" r=".5" />
      <circle cx="8.5" cy="7.5" r=".5" />
      <circle cx="6.5" cy="12.5" r=".5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </>
  ),
  "code-2": (
    <>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: (
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  "refresh-cw": (
    <>
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </>
  ),
};

const StepIcon = ({ name, size }: { name: string; size?: number }) => (
  <Svg size={size}>{ICONS[name] ?? ICONS.workflow}</Svg>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const ArrowIcon = ({ dir }: { dir: "left" | "right" }) => (
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
    className={dir === "left" ? "rotate-180" : ""}
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

/* ---------- panneau de détail ---------- */

const StepDetail = ({
  step,
  lang,
  index,
  total,
  onPrev,
  onNext,
}: {
  step: ProcessStep;
  lang: Language;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}) => {
  const { t } = useTranslation();
  const isFirst = index === 0;
  const isLast = index === total - 1;

  return (
    <article
      id={`process-panel-${step.id}`}
      role="tabpanel"
      aria-labelledby={`process-tab-${step.id}`}
      className="hero-reveal relative overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur sm:rounded-3xl"
      style={delay(0)}
    >
      {/* Numéro en filigrane */}
      <span
        aria-hidden
        className="font-display pointer-events-none absolute -right-2 -top-6 select-none text-[9rem] font-bold leading-none tracking-tighter text-accent/10 sm:-top-8 sm:text-[13rem]"
      >
        {step.number}
      </span>

      {/* En-tête */}
      <div className="relative p-5 sm:p-9 sm:pb-8">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-lg shadow-accent/30">
            <StepIcon name={step.icon} size={26} />
          </span>
          <p className="text-sm font-medium text-muted">
            {t("process.stepOf", { current: index + 1, total })}
          </p>
        </div>

        <h3 className="mt-6 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {step.title[lang]}
        </h3>
        <p className="mt-3 max-w-2xl text-base font-medium leading-relaxed text-accent sm:text-lg">
          {step.shortDescription[lang]}
        </p>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {step.description[lang]}
        </p>
      </div>

      {/* Activités + livrables */}
      <div className="relative grid gap-4 border-t border-line p-5 sm:p-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        <div>
          <p className="text-sm font-semibold">{t("process.activities")}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {step.activities.map((a) => (
              <li key={a.en} className="flex gap-3 text-sm leading-relaxed">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span className="min-w-0 text-muted">{a[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5">
          <p className="text-sm font-semibold">{t("process.deliverables")}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {step.deliverables.map((d) => (
              <li key={d.en} className="flex items-start gap-3 text-sm leading-snug">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg">
                  <CheckIcon />
                </span>
                <span className="min-w-0">{d[lang]}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Navigation entre les étapes */}
      <div className="relative flex items-center justify-between gap-3 border-t border-line p-5 sm:px-9 sm:py-6">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className="inline-flex h-11 items-center gap-2 rounded-xl border border-line bg-surface/60 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowIcon dir="left" />
          {t("process.previous")}
        </button>

        {isLast ? (
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            {t("process.cta")}
            <ArrowIcon dir="right" />
          </a>
        ) : (
          <button
            type="button"
            onClick={onNext}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
          >
            {t("process.next")}
            <ArrowIcon dir="right" />
          </button>
        )}
      </div>
    </article>
  );
};

/* ---------- section ---------- */

const Process = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const { ref, inView } = useInView<HTMLDivElement>();
  const reveal = inView ? "hero-reveal" : "opacity-0";

  const steps = useMemo(() => [...developmentProcess].sort((a, b) => a.order - b.order), []);
  const total = steps.length;

  const [index, setIndex] = useState(0);
  const active = steps[index];
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (i: number, focus = false) => {
    const next = Math.min(total - 1, Math.max(0, i));
    setIndex(next);
    const el = tabRefs.current[next];
    if (!el) return;
    if (focus) el.focus();
    // Sur mobile, recentre l'étape choisie dans la barre défilante
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % total;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (index - 1 + total) % total;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = total - 1;
    if (next === -1) return;
    e.preventDefault();
    go(next, true);
  };

  if (!active) return null;

  const ratio = total > 1 ? index / (total - 1) : 0;

  return (
    <section
      id="process"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref}>
        <div className={reveal} style={delay(0)}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("process.title")}</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {t("process.subtitle")}
          </p>
        </div>

        {/* Rail des étapes */}
        <div
          className={`-mx-5 mt-8 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-12 sm:px-0 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden ${reveal}`}
          style={delay(150)}
        >
          <div className="relative">
            {/* Ligne + progression (desktop) */}
            <div
              aria-hidden
              className="absolute top-6 hidden h-0.5 bg-line lg:block"
              style={{ left: `${100 / (total * 2)}%`, right: `${100 / (total * 2)}%` }}
            >
              <span
                className="block h-full origin-left bg-accent transition-transform duration-500 ease-out motion-reduce:transition-none"
                style={{ transform: `scaleX(${ratio})` }}
              />
            </div>

            <div
              role="tablist"
              aria-orientation="horizontal"
              aria-label={t("process.listLabel")}
              onKeyDown={onKeyDown}
              className="relative flex gap-2 lg:grid lg:gap-0"
              style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
            >
              {steps.map((s, i) => {
                const isActive = i === index;
                const isDone = i < index;
                return (
                  <button
                    key={s.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    id={`process-tab-${s.id}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls={`process-panel-${s.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => go(i)}
                    className={`group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border p-2 pr-4 text-left transition-colors duration-300 motion-reduce:transition-none lg:flex-col lg:gap-3 lg:whitespace-normal lg:border-transparent lg:bg-transparent lg:p-0 lg:px-1 lg:text-center ${
                      isActive
                        ? "border-accent/60 bg-surface"
                        : "border-line bg-surface/50 hover:border-accent/40"
                    }`}
                  >
                    <span
                      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none lg:h-12 lg:w-12 ${
                        isActive
                          ? "border-accent bg-accent text-accent-fg shadow-lg shadow-accent/30 lg:scale-110"
                          : isDone
                            ? "border-accent bg-surface text-accent lg:bg-bg"
                            : "border-line bg-surface-2 text-muted group-hover:border-accent/50 group-hover:text-accent lg:bg-bg"
                      }`}
                    >
                      <StepIcon name={s.icon} size={20} />
                    </span>

                    <span className="flex flex-col lg:items-center">
                      <span
                        className={`text-xs font-semibold tabular-nums transition-colors ${
                          isActive || isDone ? "text-accent" : "text-muted"
                        }`}
                      >
                        {s.number}
                      </span>
                      <span
                        className={`text-sm font-semibold leading-snug transition-colors lg:mt-0.5 lg:max-w-[10rem] ${
                          isActive ? "text-fg" : "text-muted group-hover:text-fg"
                        }`}
                      >
                        {s.title[lang]}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Détail : la clé rejoue l'animation à chaque changement */}
        <div className={`mt-6 sm:mt-10 ${reveal}`} style={delay(300)} aria-live="polite">
          <StepDetail
            key={active.id}
            step={active}
            lang={lang}
            index={index}
            total={total}
            onPrev={() => go(index - 1)}
            onNext={() => go(index + 1)}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;