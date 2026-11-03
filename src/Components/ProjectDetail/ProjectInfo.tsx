import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { StatusBadge, delay, useInView, useLang } from "./shared";

const ProjectInfo = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();

  const info = project.details?.info;
  const service = project.details?.service;

  const formatDate = (value?: string) => {
    if (!value) return undefined;
    const d = new Date(value);
    return Number.isNaN(d.getTime())
      ? value
      : new Intl.DateTimeFormat(lang, { year: "numeric", month: "long" }).format(d);
  };

  const items: { label: string; value: React.ReactNode }[] = [
    { label: t("projectDetail.info.client"), value: info?.client },
    { label: t("projectDetail.info.industry"), value: info?.industry?.[lang] },
    { label: t("projectDetail.info.projectType"), value: info?.projectType?.[lang] },
    { label: t("projectDetail.info.role"), value: info?.role?.[lang] },
    {
      label: t("projectDetail.info.service"),
      value: service ? (
        service.url ? (
          <a
            href={service.url}
            className="text-accent underline-offset-4 hover:underline"
          >
            {service.name[lang]}
          </a>
        ) : (
          service.name[lang]
        )
      ) : undefined,
    },
    { label: t("projectDetail.info.completionDate"), value: formatDate(info?.completionDate) },
    {
      label: t("projectDetail.info.status"),
      value: info?.status ? <StatusBadge status={info.status} /> : undefined,
    },
  ].filter((i) => Boolean(i.value));

  if (items.length === 0) return null;

  const reveal = inView ? "hero-reveal" : "opacity-0";

  return (
    <section className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-6 sm:px-6 sm:py-8">
      <div ref={ref}>
        <dl
          className={`grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 lg:grid-cols-4 ${reveal}`}
          style={delay(0)}
        >
          {items.map((item) => (
            <div key={item.label} className="min-w-0 bg-surface p-4 sm:p-5">
              <dt className="text-xs font-medium text-muted">{item.label}</dt>
              <dd className="mt-1.5 text-sm font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default ProjectInfo;