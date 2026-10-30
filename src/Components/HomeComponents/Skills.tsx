import { useMemo, useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { skillsData } from "../../Data/skills";
import type { Skill, SkillCategory } from "../../Types/Skills";

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

const CATEGORIES: SkillCategory[] = [
  "frontend",
  "backend",
  "database",
  "devops",
  "tools",
  "ai-ml",
];

/* ---------- une technologie ---------- */

const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => (
  <li
    className={`hero-reveal flex items-center gap-2.5 rounded-xl border px-3 py-2.5 transition-colors duration-300 hover:border-accent ${
      skill.featured ? "border-accent/40 bg-accent/10" : "border-line bg-surface/60"
    }`}
    style={delay(index * 35)}
  >
    {skill.icon ? (
      <img src={skill.icon} alt="" loading="lazy" className="h-6 w-6 shrink-0 object-contain" />
    ) : (
      <span
        aria-hidden
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-surface-2 font-mono text-[0.65rem] font-bold uppercase text-accent"
      >
        {skill.name.slice(0, 2)}
      </span>
    )}
    <span className={`min-w-0 truncate text-sm font-medium ${skill.featured ? "" : "text-muted"}`}>
      {skill.name}
    </span>
    {skill.featured && (
      <span aria-hidden className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
    )}
  </li>
);

/* ---------- section ---------- */

const Skills = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const { ref: consoleRef, inView: consoleInView } = useInView<HTMLDivElement>(0.1);

  const [active, setActive] = useState<SkillCategory>("frontend");
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const byCategory = useMemo(() => {
    const map = {} as Record<SkillCategory, Skill[]>;
    CATEGORIES.forEach((c) => {
      map[c] = skillsData.filter((s) => s.category === c).sort((a, b) => a.order - b.order);
    });
    return map;
  }, []);

  const visible = byCategory[active].filter((s) => !onlyFeatured || s.featured);

  // Navigation clavier dans la liste des catégories
  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const i = CATEGORIES.indexOf(active);
    const next = CATEGORIES[(i + dir + CATEGORIES.length) % CATEGORIES.length];
    setActive(next);
    document.getElementById(`skills-tab-${next}`)?.focus();
  };

  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref} className={inView ? "hero-reveal" : "opacity-0"} style={delay(0)}>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
          {t("skills.eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{t("skills.title")}</h2>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t("skills.subtitle")}
        </p>
      </div>

      {/* Console */}
      <div
        ref={consoleRef}
        className={`mt-10 overflow-hidden rounded-2xl border border-line bg-surface/70 backdrop-blur sm:mt-14 ${
          consoleInView ? "hero-reveal" : "opacity-0"
        }`}
        style={delay(100)}
      >
        {/* Barre de titre */}
        <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-4 py-3">
          <div className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <p className="min-w-0 flex-1 truncate text-center font-mono text-xs text-muted">
            {t("skills.consoleTitle")}
          </p>
          <span className="w-12 shrink-0 sm:w-[3.25rem]" aria-hidden />
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Catégories */}
          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label={t("skills.categoriesLabel")}
            onKeyDown={onKeyDown}
            className="flex gap-1.5 overflow-x-auto border-b border-line p-3 md:w-64 md:shrink-0 md:flex-col md:overflow-visible md:border-b-0 md:border-r md:p-4"
          >
            {CATEGORIES.map((cat) => {
              const selected = cat === active;
              return (
                <button
                  key={cat}
                  id={`skills-tab-${cat}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="skills-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(cat)}
                  className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors md:w-full ${
                    selected
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:bg-surface-2 hover:text-inherit"
                  }`}
                >
                  <span aria-hidden className="font-mono">
                    {selected ? ">" : "$"}
                  </span>
                  <span className="whitespace-nowrap md:truncate">{t(`skills.categories.${cat}`)}</span>
                  <span
                    className={`ml-auto rounded-md px-1.5 py-0.5 font-mono text-[0.65rem] tabular-nums ${
                      selected ? "bg-accent-fg/15" : "bg-surface-2"
                    }`}
                  >
                    {byCategory[cat].length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sortie */}
          <div
            id="skills-panel"
            role="tabpanel"
            aria-labelledby={`skills-tab-${active}`}
            className="min-w-0 flex-1 p-4 sm:p-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="min-w-0 font-mono text-xs text-muted sm:text-sm">
                <span className="text-accent">$</span> stack --list{" "}
                <span className="text-inherit">{active}</span>
                {onlyFeatured && <span> --featured</span>}
                <span
                  aria-hidden
                  className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 animate-pulse bg-accent motion-reduce:animate-none"
                />
              </p>

              <button
                type="button"
                role="switch"
                aria-checked={onlyFeatured}
                onClick={() => setOnlyFeatured((v) => !v)}
                className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-inherit"
              >
                <span
                  aria-hidden
                  className={`relative h-5 w-9 rounded-full border transition-colors ${
                    onlyFeatured ? "border-accent bg-accent" : "border-line bg-surface-2"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white shadow transition-all ${
                      onlyFeatured ? "left-[1.2rem]" : "left-0.5"
                    }`}
                  />
                </span>
                {t("skills.featuredOnly")}
              </button>
            </div>

            {/* key = relance l'animation à chaque changement */}
            <ul
              key={`${active}-${onlyFeatured}`}
              className="mt-5 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((skill, i) => (
                <SkillChip key={skill.id} skill={skill} index={i} />
              ))}
            </ul>

            {/* Barre de statut */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-line pt-4 font-mono text-[0.7rem] text-muted sm:text-xs">
              <span className="tabular-nums">{t("skills.count", { count: visible.length })}</span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t("skills.legend")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;