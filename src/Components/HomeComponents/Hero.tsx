import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import { useTranslation } from "react-i18next";

import { profile } from "../../Data/MyProfile";// adapte le chemin à ton projet
import type { Language } from "../../Types/Common";

/* --------------------------------------------------
   Utilitaires
-------------------------------------------------- */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Délai d'animation passé au CSS via une variable
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const useInView = <T extends Element>(threshold = 0.35) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const useLocalTime = (lang: Language) => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  return new Intl.DateTimeFormat(lang, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Africa/Algiers",
  }).format(now);
};

/* --------------------------------------------------
   Compteur animé
-------------------------------------------------- */

const CountUp = ({
  to,
  start,
  duration = 1600,
}: {
  to: number;
  start: boolean;
  duration?: number;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // easeOutQuart
      setValue(Math.round(to * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, duration]);

  return <>{value}</>;
};

/* --------------------------------------------------
   Bandeau de statistiques (pleine largeur)
-------------------------------------------------- */

const StatsBand = ({ lang }: { lang: Language }) => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section
      aria-label={t("hero.statsLabel")}
      className="relative border-y border-line bg-surface/50 backdrop-blur-sm"
    >
      <div ref={ref} className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, i) => (
          <div
            key={stat.name.en}
            className="relative border-line px-5 py-8 max-lg:even:border-l max-lg:[&:nth-child(n+3)]:border-t sm:px-8 sm:py-10 lg:[&:not(:first-child)]:border-l"
          >
            {/* Ligne d'accent qui se dessine sur la bordure haute */}
            <span
              aria-hidden
              className="absolute left-0 top-[-1px] h-px w-full origin-left bg-accent transition-transform duration-1000 ease-out motion-reduce:transition-none"
              style={{
                transform: inView ? "scaleX(1)" : "scaleX(0)",
                transitionDelay: `${i * 140}ms`,
              }}
            />

            <div
              className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 140 + 120}ms` }}
            >
              <p className="font-display text-5xl font-bold tabular-nums tracking-tight sm:text-6xl">
                <CountUp to={stat.number} start={inView} />
                <span className="text-accent">+</span>
              </p>
              <p className="mt-3 text-sm font-semibold">{stat.name[lang]}</p>
              <p className="mt-1.5 max-w-[30ch] text-sm leading-relaxed text-muted">
                {stat.description[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* --------------------------------------------------
   Bouton scroll
-------------------------------------------------- */

const ScrollCue = () => {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goNext = () => {
    const next = document.getElementById("about");
    if (next) next.scrollIntoView({ behavior: "smooth" });
    else window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center pb-10 pt-8">
      <button
        type="button"
        onClick={goNext}
        aria-label={t("hero.scrollLabel")}
        className={`group flex flex-col items-center gap-3 text-xs font-medium text-muted transition-all duration-500 hover:text-fg ${
          hidden ? "pointer-events-none translate-y-2 opacity-0" : "opacity-100"
        }`}
      >
        <span className="flex h-11 w-7 justify-center rounded-full border border-line bg-surface/70 pt-2 transition-colors group-hover:border-accent">
          <span className="hero-wheel h-2 w-1 rounded-full bg-accent" />
        </span>
        {t("hero.scroll")}
      </button>
    </div>
  );
};

/* --------------------------------------------------
   Hero
-------------------------------------------------- */

const Hero = () => {
  const { t, i18n } = useTranslation();

  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(
    0,
    2
  ) as Language;

  const time = useLocalTime(lang);
  const frameRef = useRef<HTMLDivElement>(null);
  const [imageFailed, setImageFailed] = useState(false);

  // Disponibilités construites depuis profile.availability
  const availableFor = (["freelance", "internship", "fullTime"] as const)
    .filter((key) => profile.availability[key])
    .map((key) => t(`hero.availability.${key}`));

  const isAvailable = availableFor.length > 0;
  const availabilityText = isAvailable
    ? t("hero.available", {
        list: new Intl.ListFormat(lang, {
          style: "long",
          type: "conjunction",
        }).format(availableFor),
      })
    : t("hero.unavailable");

  // Légère inclinaison 3D de la photo, uniquement à la souris
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || prefersReducedMotion()) return;
    const el = frameRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${
      -y * 8
    }deg)`;
  };

  const onPointerLeave = () => {
    if (frameRef.current) frameRef.current.style.transform = "";
  };

  return (
    <>
      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-40">
          {/* Colonne gauche */}
          <div className="flex flex-col items-start">
            <h1 className="font-display text-[clamp(2.25rem,4.6vw,3.75rem)] font-bold leading-[1.08] tracking-tight">
              <span className="hero-line block">
                <span
                  className="hero-line-inner block text-accent"
                  style={delay(100)}
                >
                  {t("hero.intro", { name: profile.name })}
                </span>
              </span>
              <span className="hero-line mt-2 block">
                <span className="hero-line-inner block" style={delay(240)}>
                  {profile.headline[lang]}
                </span>
              </span>
            </h1>

            <p
              className="hero-reveal mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
              style={delay(480)}
            >
              {profile.shortBio[lang]}
            </p>

            <div
              className="hero-reveal mt-9 flex flex-wrap items-center gap-3"
              style={delay(620)}
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
              >
                {t("hero.hireMe")}
              </a>
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-xl border border-line bg-surface/60 px-6 text-sm font-semibold backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                {t("hero.viewWork")}
              </a>
            </div>

            <div
              className="hero-reveal mt-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-muted backdrop-blur"
              style={delay(760)}
            >
              <span className="relative flex h-2.5 w-2.5">
                {isAvailable && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    isAvailable ? "bg-emerald-500" : "bg-muted"
                  }`}
                />
              </span>
              {availabilityText}
            </div>
          </div>

          {/* Colonne droite : photo */}
          <div
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
          >
            <div
              ref={frameRef}
              className="relative transition-transform duration-200 ease-out will-change-transform"
            >
              {/* Cadre décalé */}
              <div
                aria-hidden
                className="hero-fade absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-accent/40"
                style={delay(900)}
              />

              <div
                className="hero-clip relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface"
                style={delay(300)}
              >
                {imageFailed ? (
                  <div className="font-display flex h-full w-full items-center justify-center bg-surface-2 text-7xl font-bold text-accent">
                    YR
                  </div>
                ) : (
                  <img
                    src={profile.avatar}
                    alt={t("hero.photoAlt", { name: profile.name })}
                    onError={() => setImageFailed(true)}
                    fetchPriority="high"
                    className="h-full w-full object-cover object-top"
                  />
                )}

                {/* Balayage de scan, une seule fois */}
                <span
                  aria-hidden
                  className="hero-scan pointer-events-none absolute inset-x-0 h-0.5 bg-accent shadow-[0_0_24px_4px] shadow-accent/60"
                  style={delay(1100)}
                />

                {/* Légende : lieu + heure locale */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-line/60 bg-bg/70 px-3 py-2 text-xs backdrop-blur-md">
                  <span className="flex items-center gap-1.5 font-medium">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="text-accent"
                    >
                      <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11z" />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>
                    {profile.location}
                  </span>
                  <span
                    className="tabular-nums text-muted"
                    title={t("hero.localTime")}
                  >
                    {time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand lang={lang} />
      <ScrollCue />
    </>
  );
};

export default Hero;