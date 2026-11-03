import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { ArrowLeftIcon, ArrowRightIcon, delay, useInView, useLang } from "./shared";

const NavCard = ({
  project,
  direction,
  style,
  className,
}: {
  project: Project;
  direction: "prev" | "next";
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { t } = useTranslation();
  const lang = useLang();
  const isNext = direction === "next";

  return (
    <Link
      to={`/projects/${project.slug[lang]}`}
      style={style}
      className={`group flex min-w-0 items-center gap-4 rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur transition-all duration-300 hover:border-accent/60 active:scale-[0.99] motion-reduce:active:scale-100 sm:p-5 ${
        isNext ? "flex-row-reverse text-right" : ""
      } ${className}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
        {isNext ? <ArrowRightIcon /> : <ArrowLeftIcon />}
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-medium text-muted">
          {t(`projectDetail.nav.${direction}`)}
        </span>
        <span className="mt-0.5 block truncate text-sm font-bold sm:text-base">
          {project.title[lang]}
        </span>
      </span>
    </Link>
  );
};

const ProjectNav = ({ prev, next }: { prev?: Project; next?: Project }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reveal = inView ? "hero-reveal" : "opacity-0";

  if (!prev && !next) return null;

  return (
    <nav className="mx-auto w-full max-w-6xl overflow-x-clip px-5 pb-16 pt-4 sm:px-6 sm:pb-24">
      <div ref={ref} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {prev ? (
          <NavCard project={prev} direction="prev" className={reveal} style={delay(0)} />
        ) : (
          <span className="hidden sm:block" />
        )}
        {next && <NavCard project={next} direction="next" className={reveal} style={delay(120)} />}
      </div>
    </nav>
  );
};

export default ProjectNav;