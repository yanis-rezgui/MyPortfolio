import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { educationData } from "../../Data/education";
import type { Education as EducationItem } from "../../Types/Education";
import type { Language } from "../../Types/Common";

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

const formatMonth = (value: string, lang: Language) => {
  const [y, m] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(lang, { month: "short", year: "numeric" }).format(
    new Date(y, m - 1, 1)
  );
};

/* ---------- icônes ---------- */

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ExternalIcon = () => (
  <svg {...iconProps}>
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

const ImageIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="1.5" />
    <path d="M21 16l-5-5-9 9" />
  </svg>
);

const CheckIcon = () => (
  <svg {...iconProps} width={14} height={14}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </svg>
);

/* ---------- logo ---------- */

const Logo = ({ src, name, size = "md" }: { src?: string; name: string; size?: "md" | "lg" }) => {
  const box = size === "lg" ? "h-14 w-14 sm:h-16 sm:w-16" : "h-12 w-12";
  if (!src) {
    return (
      <span
        aria-hidden
        className={`${box} flex shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-lg font-bold text-accent`}
      >
        {name.charAt(0)}
      </span>
    );
  }
  return (
    <span
      className={`${box} flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5`}
    >
      <img src={src} alt="" loading="lazy" className="h-full w-full object-contain" />
    </span>
  );
};

/* ---------- une formation ---------- */

const EducationCard = ({
  edu,
  lang,
  index,
  large,
  onPreview,
}: {
  edu: EducationItem;
  lang: Language;
  index: number;
  large?: boolean;
  onPreview: (src: string, title: string) => void;
}) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLElement>();

  const isCurrent = edu.currentlyStudying || !edu.endDate;
  const start = formatMonth(edu.startDate, lang);
  const end = isCurrent ? t("education.present") : formatMonth(edu.endDate!, lang);
  const range = start === end ? start : `${start} – ${end}`;
  const title = edu.degree[lang];

  return (
    <article
      ref={ref}
      className={`flex h-full flex-col rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur transition-colors duration-300 hover:border-accent/50 sm:p-7 ${
        inView ? "hero-reveal" : "opacity-0"
      }`}
      style={delay(index * 100)}
    >
      {/* Institution + badges */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Logo src={edu.institutionLogo} name={edu.institution} size={large ? "lg" : "md"} />
          <div className="min-w-0">
            {edu.institutionWebsite ? (
              <a
                href={edu.institutionWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                <span className="truncate">{edu.institution}</span>
                <ExternalIcon />
              </a>
            ) : (
              <p className="truncate text-sm font-semibold text-accent">{edu.institution}</p>
            )}
            {edu.location && <p className="mt-0.5 text-xs text-muted">{edu.location}</p>}
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-fg">
            {t(`education.types.${edu.type}`)}
          </span>
          {isCurrent && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {t("education.current")}
            </span>
          )}
        </div>
      </div>

      {/* Titre */}
      <h3
        className={`mt-5 font-bold leading-snug tracking-tight ${
          large ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
        }`}
      >
        {title}
      </h3>
      <p className="mt-1.5 flex flex-wrap items-center gap-x-2 text-xs font-medium text-muted sm:text-sm">
        <span className="tabular-nums">{range}</span>
        <span aria-hidden className="h-1 w-1 rounded-full bg-line" />
        <span>{edu.field[lang]}</span>
      </p>

      {edu.description && (
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{edu.description[lang]}</p>
      )}

      {/* Réalisations */}
      {edu.achievements.length > 0 && (
        <ul className={`mt-5 flex flex-col gap-2.5 ${large ? "sm:grid sm:grid-cols-2 sm:gap-x-8" : ""}`}>
          {edu.achievements.map((a) => (
            <li key={a.en} className="flex gap-2.5 text-sm leading-relaxed">
              <span className="mt-1 shrink-0 text-accent">
                <CheckIcon />
              </span>
              <span className="min-w-0 text-muted">{a[lang]}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Certificat */}
      {(edu.credentialUrl || edu.certificationImage) && (
        <div className="mt-auto flex flex-col gap-2 border-t border-line pt-5 sm:flex-row">
          <div className="mt-0" />
          {edu.credentialUrl && (
            <a
              href={edu.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 sm:h-10 sm:w-auto"
            >
              {t("education.credential")}
              <ExternalIcon />
            </a>
          )}
          {edu.certificationImage && (
            <button
              type="button"
              onClick={() => onPreview(edu.certificationImage!, title)}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:h-10 sm:w-auto"
            >
              <ImageIcon />
              {t("education.preview")}
            </button>
          )}
        </div>
      )}
    </article>
  );
};

/* ---------- section ---------- */

const Education = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [preview, setPreview] = useState<{ src: string; title: string } | null>(null);

  const sorted = [...educationData].sort((a, b) => a.order - b.order);
  const main = sorted.filter((e) => e.type === "university");
  const others = sorted.filter((e) => e.type !== "university");

  // Lightbox : Échap + blocage du scroll
  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [preview]);

  const openPreview = (src: string, title: string) => setPreview({ src, title });

  return (
    <section
      id="education"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      <div ref={ref} className={inView ? "hero-reveal" : "opacity-0"} style={delay(0)}>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{t("education.title")}</h2>
        <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t("education.subtitle")}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:mt-14 sm:gap-6">
        {/* Parcours universitaire */}
        {main.map((edu, i) => (
          <EducationCard key={edu.id} edu={edu} lang={lang} index={i} large onPreview={openPreview} />
        ))}

        {/* Certifications */}
        {others.length > 0 && (
          <>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted sm:mt-6">
              {t("education.certifications")}
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
              {others.map((edu, i) => (
                <EducationCard key={edu.id} edu={edu} lang={lang} index={i} onPreview={openPreview} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Lightbox certificat */}
      {preview && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={preview.title}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-surface"
          >
            <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3">
              <p className="truncate text-sm font-semibold">{preview.title}</p>
              <button
                type="button"
                onClick={() => setPreview(null)}
                aria-label={t("education.close")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line transition-colors hover:border-accent hover:text-accent"
              >
                <svg {...iconProps}>
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="max-h-[75vh] overflow-auto bg-white p-2">
              <img src={preview.src} alt={preview.title} className="mx-auto h-auto max-w-full" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;