import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { SectionTitle, delay, sectionClass, useInView, useLang } from "./shared";

const ProjectTechStack = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const description = project.details?.technicalDescription?.[lang];

  // Repli sur la liste simple si aucun groupe n'est défini
  const groups =
    project.details?.techStack && project.details.techStack.length > 0
      ? project.details.techStack.map((g) => ({
          label: g.category[lang],
          items: g.technologies,
        }))
      : project.technologies.length > 0
        ? [{ label: t("projectDetail.tech.default"), items: project.technologies }]
        : [];

  if (!description && groups.length === 0) return null;

  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section className={sectionClass}>
      <div ref={ref}>
        <SectionTitle
          eyebrow={t("projectDetail.tech.eyebrow")}
          title={t("projectDetail.tech.title")}
          className={reveal}
          style={delay(0)}
        />

        {description && (
          <p
            className={`mt-4 max-w-3xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg ${reveal}`}
            style={delay(120)}
          >
            {description}
          </p>
        )}

        <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {groups.map((g, i) => (
            <div
              key={g.label}
              className={`rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-colors duration-300 hover:border-accent/60 sm:p-6 ${reveal}`}
              style={delay(200 + i * 100)}
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                {g.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {g.items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-line bg-surface-2 px-2 py-1 text-[0.7rem] font-medium text-muted sm:text-xs"
                  >
                    {tech}
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

export default ProjectTechStack;