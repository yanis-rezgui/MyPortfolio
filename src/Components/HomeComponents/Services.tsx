import { useEffect, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { services as allServices } from "../../Data/Services"; // adapte le chemin
import type { Service } from "../../Types/Service";
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

/* ---------- icônes (clé = Service["icon"]) ---------- */

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
  "code-2": (
    <>
      <path d="m18 16 4-4-4-4" />
      <path d="m6 8-4 4 4 4" />
      <path d="m14.5 4-5 16" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  "panels-top-left": (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </>
  ),
  "layout-dashboard": (
    <>
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </>
  ),
  "brain-circuit": (
    <>
      <path d="M11 3l1.9 5.1L18 10l-5.1 1.9L11 17l-1.9-5.1L4 10l5.1-1.9z" />
      <path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />,
  "shopping-bag": (
    <>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </>
  ),
  workflow: (
    <>
      <rect x="3" y="3" width="8" height="8" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect x="13" y="13" width="8" height="8" rx="2" />
    </>
  ),
  settings: (
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  ),
};

const ServiceIcon = ({ name, size }: { name: string; size?: number }) => (
  <Svg size={size}>{ICONS[name] ?? ICONS["code-2"]}</Svg>
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

const ArrowIcon = () => (
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
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

/* ---------- panneau de détail ---------- */

const ServiceDetail = ({ service, lang }: { service: Service; lang: Language }) => {
  const { t } = useTranslation();

  return (
    <article
      id={`service-panel-${service.id}`}
      role="tabpanel"
      aria-labelledby={`service-tab-${service.id}`}
      className="hero-reveal relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur sm:rounded-3xl sm:p-9"
      style={delay(0)}
    >
      {/* Grande icône en filigrane */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 text-accent/10 sm:-right-4 sm:-top-4"
      >
        <ServiceIcon name={service.icon} size={176} />
      </span>

      <div className="relative">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-accent-fg shadow-lg shadow-accent/30">
          <ServiceIcon name={service.icon} size={26} />
        </span>

        <h3 className="mt-6 max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
          {service.title[lang]}
        </h3>

        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {service.description[lang]}
        </p>

        {/* Ce qui est inclus */}
        <div className="mt-8">
          <p className="text-sm font-semibold">{t("services.includes")}</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.features.map((f) => (
              <li
                key={f.en}
                className="flex items-start gap-3 rounded-xl border border-line bg-surface-2/60 p-3.5 text-sm leading-snug"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckIcon />
                </span>
                <span className="min-w-0">{f[lang]}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mt-8 border-t border-line pt-6">
          <p className="text-xs font-medium text-muted">{t("services.technologies")}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {service.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.7rem] font-medium text-muted sm:text-xs"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contact"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 sm:w-auto"
          >
            {t("services.cta")}
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
              <ArrowIcon />
            </span>
          </a>
          {!service.available && (
            <span className="text-sm text-muted">{t("services.unavailable")}</span>
          )}
        </div>
      </div>
    </article>
  );
};

/* ---------- section ---------- */

const Services = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const { ref, inView } = useInView<HTMLDivElement>();
  const reveal = inView ? "hero-reveal" : "opacity-0";

  const list = useMemo(() => [...allServices].sort((a, b) => a.order - b.order), []);
  const [activeId, setActiveId] = useState(list[0]?.id ?? "");
  const active = list.find((s) => s.id === activeId) ?? list[0];

  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const select = (id: string, focus = false) => {
    setActiveId(id);
    const el = tabRefs.current[id];
    if (!el) return;
    if (focus) el.focus();
    // Sur mobile, recentre l'onglet choisi dans la barre défilante
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  // Navigation clavier : flèches, Début, Fin
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const i = list.findIndex((s) => s.id === activeId);
    let next = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (i + 1) % list.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (i - 1 + list.length) % list.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = list.length - 1;
    if (next === -1) return;
    e.preventDefault();
    select(list[next].id, true);
  };

  if (!active) return null;

  return (
    <section
      id="services"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref}>
        <div className={reveal} style={delay(0)}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("services.title")}</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div
          className={`mt-8 grid items-start gap-5 sm:mt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8 ${reveal}`}
          style={delay(150)}
        >
          {/* Liste : barre défilante sur mobile, colonne sur desktop */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={t("services.listLabel")}
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:sticky lg:top-28 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {list.map((s) => {
              const isActive = s.id === active.id;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[s.id] = el;
                  }}
                  id={`service-tab-${s.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`service-panel-${s.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(s.id)}
                  className={`group relative flex shrink-0 items-center gap-3 whitespace-nowrap rounded-xl border p-2 pr-4 text-left text-sm font-semibold transition-all duration-300 motion-reduce:transition-none lg:w-full lg:whitespace-normal lg:p-2.5 lg:pr-4 ${
                    isActive
                      ? "border-accent/60 bg-surface text-fg shadow-md shadow-accent/10"
                      : "border-line bg-surface/50 text-muted hover:border-accent/40 hover:text-fg"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isActive
                        ? "bg-accent text-accent-fg"
                        : "bg-surface-2 text-accent group-hover:bg-accent/15"
                    }`}
                  >
                    <ServiceIcon name={s.icon} size={20} />
                  </span>
                  <span className="min-w-0 leading-snug">{s.title[lang]}</span>
                </button>
              );
            })}
          </div>

          {/* Détail : la clé rejoue l'animation à chaque changement */}
          <div className="min-w-0" aria-live="polite">
            <ServiceDetail key={active.id} service={active} lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;