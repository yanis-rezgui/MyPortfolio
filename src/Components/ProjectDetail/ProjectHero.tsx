import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import {
  ArrowIcon,
  ArrowLeftIcon,
  GitHubIcon,
  StatusBadge,
  delay,
  useInView,
  useLang,
} from "./shared";

const ProjectHero = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>(0.05);
  const [failed, setFailed] = useState(false);

  const reveal = inView ? "hero-reveal" : "opacity-0";
  const status = project.details?.info?.status;

  return (
    <section className="mx-auto w-full max-w-6xl overflow-x-clip px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36">
      <div ref={ref}>
        <a
          href="/#work"
          className={`inline-flex items-center gap-2 rounded-lg text-sm font-medium text-muted transition-colors hover:text-accent ${reveal}`}
          style={delay(0)}
        >
          <ArrowLeftIcon />
          {t("projectDetail.back")}
        </a>

        <div
          className={`mt-6 flex flex-wrap items-center gap-3 ${reveal}`}
          style={delay(100)}
        >
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-fg">
            {project.category.name[lang]}
          </span>
          {status && <StatusBadge status={status} />}
        </div>

        <h1
          className={`mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl ${reveal}`}
          style={delay(200)}
        >
          {project.title[lang]}
        </h1>

        <p
          className={`mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-lg ${reveal}`}
          style={delay(300)}
        >
          {project.shortDescription[lang]}
        </p>

        {(project.liveUrl || project.githubUrl) && (
          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center ${reveal}`}
            style={delay(400)}
          >
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 sm:w-auto"
              >
                {t("projectDetail.visitSite")}
                <ArrowIcon />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-6 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent sm:w-auto"
              >
                <GitHubIcon />
                {t("projectDetail.viewCode")}
              </a>
            )}
          </div>
        )}

        {/* Cover : même écran fictif que les cartes */}
        <div
          className={`relative mt-10 overflow-hidden rounded-2xl border border-line bg-surface-2 sm:mt-14 sm:rounded-3xl ${reveal}`}
          style={delay(500)}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -top-16 left-1/2 h-56 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="relative p-3 sm:p-8">
            <div className="flex flex-col overflow-hidden rounded-xl border border-line bg-bg shadow-xl shadow-black/10">
              <div className="flex h-8 shrink-0 items-center gap-2 border-b border-line bg-surface px-3 sm:h-9">
                <span aria-hidden className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-500/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                </span>
                <span
                  aria-hidden
                  className="mx-auto flex h-5 w-full max-w-[60%] items-center justify-center truncate rounded-md bg-surface-2 px-2 text-[0.65rem] font-medium text-muted"
                >
                  {project.slug.en}
                </span>
                <span aria-hidden className="w-9 shrink-0" />
              </div>

              <div className="aspect-[16/10] w-full overflow-hidden bg-surface-2">
                {failed ? (
                  <div className="font-display flex h-full w-full items-center justify-center text-7xl font-bold text-accent/50">
                    {project.title.en.slice(0, 2)}
                  </div>
                ) : (
                  <img
                    src={project.coverImage}
                    alt={project.title[lang]}
                    onError={() => setFailed(true)}
                    className="h-full w-full object-cover object-top"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;