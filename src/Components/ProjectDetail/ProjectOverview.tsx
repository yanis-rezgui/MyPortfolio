import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { SectionTitle, delay, paragraphs, sectionClass, useInView, useLang } from "./shared";

const ProjectOverview = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const intro = project.details?.introduction?.[lang];
  const description = paragraphs(project.description[lang]);
  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section className={sectionClass}>
      <div
        ref={ref}
        className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        <SectionTitle
          eyebrow={t("projectDetail.overview.eyebrow")}
          title={t("projectDetail.overview.title")}
          className={`lg:sticky lg:top-28 ${reveal}`}
          style={delay(0)}
        />

        <div className="flex min-w-0 flex-col gap-4 sm:gap-5">
          {intro && (
            <p
              className={`text-lg font-medium leading-relaxed sm:text-xl ${reveal}`}
              style={delay(120)}
            >
              {intro}
            </p>
          )}
          {description.map((text, i) => (
            <p
              key={i}
              className={`text-[0.95rem] leading-relaxed text-muted sm:text-lg ${reveal}`}
              style={delay(240 + i * 120)}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;