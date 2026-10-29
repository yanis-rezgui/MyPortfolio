import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Projects as allProjects } from "../../Data/Projects";
import type { Project } from "../../Types/Project";
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

/* ---------- briques ---------- */

const Cover = ({ project, className }: { project: Project; className: string }) => {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-surface-2 p-2.5 sm:p-4 ${className}`}>
      {failed ? (
        <div className="font-display flex h-full w-full items-center justify-center text-5xl font-bold text-accent/50 sm:text-6xl">
          {project.title.en.slice(0, 2)}
        </div>
      ) : (
        <img
          src={project.coverImage}
          alt=""
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full rounded-lg object-contain object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      )}
    </div>
  );
};

const TechList = ({ items, max }: { items: string[]; max: number }) => (
  <ul className="flex flex-wrap gap-1.5">
    {items.slice(0, max).map((tech) => (
      <li
        key={tech}
        className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.7rem] font-medium text-muted sm:text-xs"
      >
        {tech}
      </li>
    ))}
    {items.length > max && (
      <li className="rounded-md px-1.5 py-1 text-[0.7rem] font-medium text-accent sm:px-2 sm:text-xs">
        +{items.length - max}
      </li>
    )}
  </ul>
);

const ViewLink = ({ project, lang }: { project: Project; lang: Language }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={`/projects/${project.slug[lang]}`}
      className="inline-flex items-center gap-2 text-sm font-semibold after:absolute after:inset-0 after:content-['']"
    >
      {t("projects.viewProject")}
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg group-active:border-accent group-active:bg-accent group-active:text-accent-fg">
        <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none">
          <ArrowIcon />
        </span>
      </span>
    </Link>
  );
};

const FeaturedCard = ({
  project,
  lang,
  className,
  style,
}: {
  project: Project;
  lang: Language;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { t } = useTranslation();
  return (
    <article
      style={style}
      className={`group relative grid overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur transition-all duration-300 hover:border-accent/60 active:scale-[0.99] motion-reduce:active:scale-100 sm:rounded-3xl lg:grid-cols-[1.2fr_1fr] ${className}`}
    >
      <Cover project={project} className="h-52 sm:h-80 lg:h-auto lg:min-h-[420px]" />

      <div className="flex min-w-0 flex-col justify-center gap-4 p-5 sm:gap-5 sm:p-9">
        <div className="flex flex-wrap items-center gap-2.5 text-sm sm:gap-3">
          {project.featured && (
            <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg">
              {t("projects.featured")}
            </span>
          )}
          <span className="font-medium text-accent">{project.category.name[lang]}</span>
        </div>

        <h3 className="text-2xl font-bold tracking-tight sm:text-4xl">
          {project.title[lang]}
        </h3>

        <p className="text-[0.95rem] leading-relaxed text-muted sm:text-base">
          {project.shortDescription[lang]}
        </p>

        {/* Sur mobile, seulement 2 points forts pour garder la carte courte */}
        <ul className="flex flex-col gap-2 text-sm">
          {project.features.slice(0, 3).map((f) => (
            <li key={f.en} className="flex gap-3 max-sm:[&:nth-child(n+3)]:hidden">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="text-muted">{f[lang]}</span>
            </li>
          ))}
        </ul>

        <TechList items={project.technologies} max={5} />

        <div className="pt-1 sm:pt-2">
          <ViewLink project={project} lang={lang} />
        </div>
      </div>
    </article>
  );
};

const ProjectCard = ({
  project,
  lang,
  className,
  style,
}: {
  project: Project;
  lang: Language;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <article
    style={style}
    className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 active:scale-[0.99] motion-reduce:active:scale-100 ${className}`}
  >
    <Cover project={project} className="h-48 sm:h-64" />

    <div className="flex flex-1 flex-col gap-3 p-5 sm:gap-4 sm:p-6">
      <span className="text-sm font-medium text-accent">{project.category.name[lang]}</span>
      <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{project.title[lang]}</h3>
      <p className="line-clamp-3 text-[0.95rem] leading-relaxed text-muted sm:text-sm">
        {project.shortDescription[lang]}
      </p>
      <TechList items={project.technologies} max={3} />
      <div className="mt-auto pt-1 sm:pt-2">
        <ViewLink project={project} lang={lang} />
      </div>
    </div>
  </article>
);

/* ---------- section ---------- */

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const [active, setActive] = useState("all");
  const { ref, inView } = useInView<HTMLDivElement>();

  const published = useMemo(
    () => allProjects.filter((p) => p.published).sort((a, b) => a.order - b.order),
    []
  );

  // Catégories uniques, dans l'ordre d'apparition des projets
  const filters = useMemo(() => {
    const seen = new Map<string, Project["category"]>();
    published.forEach((p) => seen.has(p.category.slug) || seen.set(p.category.slug, p.category));
    return [
      { key: "all", label: t("projects.all"), count: published.length },
      ...[...seen.values()].map((c) => ({
        key: c.slug,
        label: c.name[lang],
        count: published.filter((p) => p.category.slug === c.slug).length,
      })),
    ];
  }, [published, lang, t]);

  const visible = active === "all" ? published : published.filter((p) => p.category.slug === active);
  const [first, ...rest] = visible;

  // Pastille qui glisse sous le filtre actif
  const btnRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [pill, setPill] = useState({ left: 0, width: 0 });
  useLayoutEffect(() => {
    const el = btnRefs.current[active];
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
  }, [active, lang, filters.length]);

  // Sur mobile, recentre le filtre choisi dans la barre défilante
  const selectFilter = (key: string) => {
    setActive(key);
    btnRefs.current[key]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section
      id="work"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref}>
        <div className={reveal} style={delay(0)}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("projects.title")}</h2>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Filtres : barre défilante sur mobile, bord à bord */}
        <div
          className={`-mx-5 mt-8 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:px-0 [&::-webkit-scrollbar]:hidden ${reveal}`}
          style={delay(120)}
        >
          <div
            role="group"
            aria-label={t("projects.filtersLabel")}
            className="relative inline-flex gap-1 rounded-xl border border-line bg-surface/70 p-1 backdrop-blur"
          >
            <span
              aria-hidden
              className="absolute bottom-1 top-1 rounded-lg bg-accent shadow-md shadow-accent/30 transition-[left,width] duration-300 ease-out motion-reduce:transition-none"
              style={{ left: pill.left, width: pill.width }}
            />
            {filters.map((f) => {
              const isActive = f.key === active;
              return (
                <button
                  key={f.key}
                  ref={(el) => {
                    btnRefs.current[f.key] = el;
                  }}
                  type="button"
                  onClick={() => selectFilter(f.key)}
                  aria-pressed={isActive}
                  className={`relative z-10 flex h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-lg px-3.5 text-[0.8rem] font-semibold transition-colors duration-300 sm:px-4 sm:text-sm ${
                    isActive ? "text-accent-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {f.label}
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-xs tabular-nums transition-colors duration-300 ${
                      isActive ? "bg-accent-fg/15" : "bg-surface-2"
                    }`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projets : la clé rejoue l'animation à chaque changement de filtre */}
        <div key={active} className="mt-6 sm:mt-10">
          {first && (
            <FeaturedCard project={first} lang={lang} className={reveal} style={delay(0)} />
          )}

          {rest.length > 0 && (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-6 sm:gap-6 md:grid-cols-2">
              {rest.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  lang={lang}
                  className={reveal}
                  style={delay(120 + i * 100)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;