import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { CheckIcon, SectionTitle, delay, sectionClass, useInView, useLang } from "./shared";

const ProjectCaseStudy = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const details = project.details;
  const blocks = [
    { key: "problem", text: details?.problem?.[lang] },
    { key: "solution", text: details?.solution?.[lang] },
  ].filter((b): b is { key: string; text: string } => Boolean(b.text));
  const results = details?.results ?? [];

  if (blocks.length === 0 && results.length === 0) return null;

  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section className={sectionClass}>
      <div ref={ref}>
        <SectionTitle
          eyebrow={t("projectDetail.caseStudy.eyebrow")}
          title={t("projectDetail.caseStudy.title")}
          className={reveal}
          style={delay(0)}
        />

        {blocks.length > 0 && (
          <div
            className={`mt-8 grid gap-4 sm:mt-10 sm:gap-6 ${
              blocks.length > 1 ? "md:grid-cols-2" : ""
            }`}
          >
            {blocks.map((b, i) => (
              <article
                key={b.key}
                className={`rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-colors duration-300 hover:border-accent/60 sm:rounded-3xl sm:p-8 ${reveal}`}
                style={delay(120 + i * 120)}
              >
                <span className="font-display text-sm font-bold tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                  {t(`projectDetail.caseStudy.${b.key}`)}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted sm:text-base">
                  {b.text}
                </p>
              </article>
            ))}
          </div>
        )}

        {results.length > 0 && (
          <div className="mt-8 sm:mt-10">
            <h3
              className={`text-lg font-bold tracking-tight sm:text-xl ${reveal}`}
              style={delay(360)}
            >
              {t("projectDetail.caseStudy.results")}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
              {results.map((r, i) => (
                <li
                  key={r.en}
                  className={`flex items-start gap-3 rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur sm:p-5 ${reveal}`}
                  style={delay(440 + i * 80)}
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg">
                    <CheckIcon />
                  </span>
                  <span className="text-sm leading-relaxed sm:text-base">{r[lang]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectCaseStudy;