import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import type { Language } from "../../Types/Common";
import type { ProjectStatus } from "../../Types/Project";

export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export const useInView = <T extends Element>(threshold = 0.1) => {
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

export const useLang = () => {
  const { i18n } = useTranslation();
  return (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;
};

export const paragraphs = (text?: string) => (text ? text.split("\n\n") : []);

/* ---------- Layout ---------- */

export const sectionClass =
  "mx-auto w-full max-w-6xl overflow-x-clip px-5 py-12 sm:px-6 sm:py-16";

export const SectionTitle = ({
  eyebrow,
  title,
  className,
  style,
}: {
  eyebrow: string;
  title: string;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div className={className} style={style}>
    <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
  </div>
);

/* ---------- Icônes ---------- */

const Icon = ({ children, size = 18 }: { children: React.ReactNode; size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export const ArrowIcon = () => (
  <Icon size={16}>
    <path d="M7 17L17 7M8 7h9v9" />
  </Icon>
);
export const ArrowLeftIcon = () => (
  <Icon size={16}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </Icon>
);
export const ArrowRightIcon = () => (
  <Icon size={16}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Icon>
);
export const CheckIcon = () => (
  <Icon size={16}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);
export const CloseIcon = () => (
  <Icon>
    <path d="M6 6l12 12M18 6L6 18" />
  </Icon>
);
export const GitHubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
export const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
export const QuoteIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M9.4 5C5.6 6.4 3 9.8 3 14v5h6v-6H6.2c.2-2.2 1.5-3.8 3.9-4.7L9.4 5zm10 0c-3.8 1.4-6.4 4.8-6.4 9v5h6v-6h-2.8c.2-2.2 1.5-3.8 3.9-4.7L19.4 5z" />
  </svg>
);

/* ---------- Badge de statut ---------- */

const statusDot: Record<ProjectStatus, string> = {
  online: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  completed: "bg-accent",
  offline: "bg-muted",
};

export const StatusBadge = ({ status }: { status: ProjectStatus }) => {
  const { t } = useTranslation();
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-xs font-semibold backdrop-blur">
      <span aria-hidden className="relative flex h-2 w-2">
        {status === "online" && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
        )}
        <span className={`relative inline-flex h-2 w-2 rounded-full ${statusDot[status]}`} />
      </span>
      {t(`projectDetail.status.${status}`)}
    </span>
  );
};