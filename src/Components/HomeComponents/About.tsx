import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { profile } from "../../Data/MyProfile";
import type { Language } from "../../Types/Common";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const useInView = <T extends Element>(threshold = 0.2) => {
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

const CountUp = ({ to, start, duration = 1400 }: { to: number; start: boolean; duration?: number }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{value}</>;
};

const StatsSummary = ({
  lang,
  start,
  className,
  style,
}: {
  lang: Language;
  start: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => {
  const { t } = useTranslation();
  return (
    <div
      role="group"
      aria-label={t("hero.statsLabel")}
      style={style}
      className={`grid grid-cols-2 rounded-2xl border border-line bg-surface/70 backdrop-blur sm:grid-cols-4 ${className}`}
    >
      {profile.stats.map((stat) => (
        <div
          key={stat.name.en}
          className="border-line p-4 max-sm:even:border-l max-sm:[&:nth-child(n+3)]:border-t sm:p-5 sm:[&:not(:first-child)]:border-l"
        >
          <p className="font-display text-2xl font-bold tabular-nums tracking-tight sm:text-3xl">
            <CountUp to={stat.number} start={start} />
            <span className="text-accent">+</span>
          </p>
          <p className="mt-1.5 text-xs font-medium leading-snug text-muted">{stat.name[lang]}</p>
        </div>
      ))}
    </div>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2) as Language;

  const { ref, inView } = useInView<HTMLDivElement>();
  const [imageFailed, setImageFailed] = useState(false);

  const reveal = inView ? "hero-reveal" : "opacity-0";
  const paragraphs = profile.about[lang].split("\n\n");

  return (
    <section
  id="about"
  className="w-full max-w-6xl mx-auto overflow-x-clip px-3 py-16 sm:px-6 sm:py-24"
>
      <div
        ref={ref}
        className="grid grid-cols-1 items-start gap-12 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20"
      >
        {/* Photo */}
        <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:sticky lg:top-28 lg:max-w-none">
          <div
            aria-hidden
            className={`absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl border border-accent/40 sm:-translate-x-4 sm:translate-y-4 ${
              inView ? "hero-fade" : "opacity-0"
            }`}
            style={delay(700)}
          />

          <div
            className={`group relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface ${
              inView ? "hero-clip" : "[clip-path:inset(100%_0_0_0)]"
            }`}
            style={delay(0)}
          >
            {imageFailed ? (
              <div className="font-display flex h-full w-full items-center justify-center bg-surface-2 text-7xl font-bold text-accent">
                YR
              </div>
            ) : (
              <img
                src={profile.avatar}
                alt={t("about.photoAlt", { name: profile.name })}
                loading="lazy"
                onError={() => setImageFailed(true)}
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
            )}

            <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-line/60 bg-bg/70 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
              {t("about.badge")}
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="min-w-0">
          <h2
            className={`text-3xl font-bold tracking-tight sm:text-5xl ${reveal}`}
            style={delay(100)}
          >
            {t("about.title")}
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={`text-[0.95rem] leading-relaxed text-muted sm:text-lg ${reveal}`}
                style={delay(250 + i * 150)}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Infos rapides */}
          <dl className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            <div
              className={`rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur sm:p-5 ${reveal}`}
              style={delay(550)}
            >
              <dt className="text-xs font-medium text-muted">{t("about.locationLabel")}</dt>
              <dd className="mt-1.5 text-sm font-semibold">{profile.location}</dd>
            </div>

            <div
              className={`rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur sm:p-5 ${reveal}`}
              style={delay(650)}
            >
              <dt className="text-xs font-medium text-muted">{t("about.studyLabel")}</dt>
              <dd className="mt-1.5 text-sm font-semibold">{t("about.studyValue")}</dd>
            </div>

            <div
              className={`rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur sm:col-span-2 sm:p-5 ${reveal}`}
              style={delay(750)}
            >
              <dt className="text-xs font-medium text-muted">{t("about.languagesLabel")}</dt>
              <dd className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                {profile.languages.map((l) => (
                  <span
                    key={l.name.en}
                    className="w-full rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm sm:w-auto sm:py-1.5"
                  >
                    <span className="font-semibold">{l.name[lang]}</span>
                    <span className="text-muted">{`, ${l.level[lang]}`}</span>
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <StatsSummary
            lang={lang}
            start={inView}
            className={`mt-3 sm:mt-4 ${reveal}`}
            style={delay(850)}
          />

          {/* Actions */}
          <div
            className={`mt-8 flex flex-col gap-3 sm:flex-row sm:items-center ${reveal}`}
            style={delay(950)}
          >
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 sm:w-auto"
              >
                {t("about.downloadCv")}
              </a>
            )}
            <a
              href="#contact"
              className={`inline-flex h-12 w-full items-center justify-center rounded-xl px-6 text-sm font-semibold transition-all hover:-translate-y-0.5 sm:w-auto ${
                profile.resumeUrl
                  ? "border border-line bg-surface/60 backdrop-blur hover:border-accent hover:text-accent"
                  : "bg-accent text-accent-fg hover:shadow-lg hover:shadow-accent/30"
              }`}
            >
              {t("about.contact")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;