import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { SectionTitle, delay, sectionClass, useInView, useLang } from "./shared";

const ProjectWork = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const contributions = project.details?.contributions ?? [];
  const features = project.features;

  if (contributions.length === 0 && features.length === 0) return null;

  const columns = [
    { key: "contributions", items: contributions },
    { key: "features", items: features },
  ].filter((c) => c.items.length > 0);

  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section className={sectionClass}>
      <div ref={ref}>
        <SectionTitle
          eyebrow={t("projectDetail.work.eyebrow")}
          title={t("projectDetail.work.title")}
          className={reveal}
          style={delay(0)}
        />

        <div
          className={`mt-8 grid gap-4 sm:mt-10 sm:gap-6 ${
            columns.length > 1 ? "lg:grid-cols-2" : ""
          }`}
        >
          {columns.map((col, c) => (
            <div
              key={col.key}
              className={`rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur sm:rounded-3xl sm:p-8 ${reveal}`}
              style={delay(120 + c * 120)}
            >
              <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                {t(`projectDetail.work.${col.key}`)}
              </h3>
              <ul className="mt-5 flex flex-col gap-3 text-sm sm:text-base">
                {col.items.map((item) => (
                  <li key={item.en} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    <span className="text-muted">{item[lang]}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectWork;