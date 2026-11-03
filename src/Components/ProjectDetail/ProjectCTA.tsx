import { useTranslation } from "react-i18next";

import { contact } from "../../Data/MyProfile";
import type { Project } from "../../Types/Project";
import {
  ArrowRightIcon,
  CheckIcon,
  MailIcon,
  delay,
  sectionClass,
  useInView,
  useLang,
} from "./shared";

const ProjectCTA = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const kind = project.details?.info?.projectType?.[lang] ?? project.category.name[lang];
  const points = t("projectDetail.cta.points", { returnObjects: true });
  const list = Array.isArray(points) ? (points as string[]) : [];

  const subject = encodeURIComponent(t("projectDetail.cta.emailSubject", { type: kind }));
  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section id="similar-project" className={sectionClass}>
      <div ref={ref}>
        <div
          className={`relative overflow-hidden rounded-2xl border border-accent/40 bg-surface/70 p-6 backdrop-blur sm:rounded-3xl sm:p-14 ${reveal}`}
          style={delay(0)}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                {t("projectDetail.cta.eyebrow")}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
                {t("projectDetail.cta.title")}
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-lg">
                {t("projectDetail.cta.text", { type: kind })}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/#contact"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 sm:w-auto"
                >
                  {t("projectDetail.cta.primary")}
                  <ArrowRightIcon />
                </a>
                <a
                  href={`mailto:${contact.email}?subject=${subject}`}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:w-auto"
                >
                  <MailIcon />
                  {t("projectDetail.cta.secondary")}
                </a>
              </div>
            </div>

            {list.length > 0 && (
              <ul className="flex flex-col gap-3">
                {list.map((point, i) => (
                  <li
                    key={point}
                    className={`flex items-center gap-3 rounded-2xl border border-line bg-bg/60 p-4 text-sm font-medium backdrop-blur ${reveal}`}
                    style={delay(200 + i * 100)}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-fg">
                      <CheckIcon />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCTA;