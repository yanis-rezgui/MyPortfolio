import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { contact, profile } from "../../Data/MyProfile";

/* ---------- utilitaires ---------- */

const NAV_LINKS = ["work", "about", "experience", "services", "process", "skills", "contact"] as const;

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const useInView = <T extends Element>(threshold = 0.1) => {
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

const socialLink = (name: string) =>
  contact.socials.find((s) => s.name.toLowerCase() === name.toLowerCase())?.link;

/* ---------- icônes ---------- */

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

const LinkedInIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const GitHubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
const InstagramIcon = () => (
  <Icon>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Icon>
);
const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
const MapPinIcon = () => (
  <Icon size={16}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const ArrowUpIcon = () => (
  <Icon size={16}>
    <path d="M12 19V5M5 12l7-7 7 7" />
  </Icon>
);

/* ---------- footer ---------- */

const Footer = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(0, 2);

  const { ref, inView } = useInView<HTMLDivElement>();
  const reveal = inView ? "hero-reveal" : "opacity-0";

  // Disponibilités (même logique que le Hero)
  const availableFor = (["freelance", "internship", "fullTime"] as const)
    .filter((key) => profile.availability[key])
    .map((key) => t(`hero.availability.${key}`));
  const isAvailable = availableFor.length > 0;
  const availabilityText = isAvailable
    ? t("hero.available", {
        list: new Intl.ListFormat(lang, { style: "long", type: "conjunction" }).format(availableFor),
      })
    : t("hero.unavailable");

  const socials = [
    { name: "LinkedIn", href: socialLink("LinkedIn"), icon: <LinkedInIcon /> },
    { name: "GitHub", href: socialLink("GitHub"), icon: <GitHubIcon /> },
    { name: "Instagram", href: socialLink("Instagram"), icon: <InstagramIcon /> },
  ].filter((s): s is { name: string; href: string; icon: React.ReactElement } => Boolean(s.href));

  const backToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="relative border-t border-line bg-surface/50 backdrop-blur-sm">
      <div
        ref={ref}
        className="mx-auto w-full max-w-6xl overflow-x-clip px-5 pt-14 sm:px-6 sm:pt-20"
      >
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          {/* Marque */}
          <div className={`flex flex-col items-start ${reveal}`} style={delay(0)}>
            <div className="flex items-center gap-2.5">
              <span className="font-display flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-base font-bold text-accent">
                YR
              </span>
              <span className="text-lg font-extrabold tracking-tight sm:text-xl">{profile.name}</span>
            </div>

            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-muted">
              {t("footer.tagline")}
            </p>

            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-4 py-2 text-sm text-muted backdrop-blur">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                {isAvailable && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70 motion-reduce:animate-none" />
                )}
                <span
                  className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                    isAvailable ? "bg-emerald-500" : "bg-muted"
                  }`}
                />
              </span>
              <span className="min-w-0">{availabilityText}</span>
            </div>
          </div>

          {/* Navigation */}
          <nav aria-label={t("footer.navigation")} className={reveal} style={delay(120)}>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {t("footer.navigation")}
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 lg:grid-cols-1">
              {NAV_LINKS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    className="inline-block rounded-md py-0.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    {t(`header.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className={reveal} style={delay(240)}>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              {t("footer.connect")}
            </p>

            <a
              href={`mailto:${contact.email}`}
              className="group mt-4 flex min-w-0 items-center gap-3 text-sm font-medium transition-colors hover:text-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-colors group-hover:border-accent group-hover:text-accent">
                <MailIcon />
              </span>
              <span className="min-w-0 truncate">{contact.email}</span>
            </a>

            {profile.location && (
              <p className="mt-3 flex items-center gap-3 text-sm text-muted">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line bg-surface">
                  <MapPinIcon />
                </span>
                {profile.location}
              </p>
            )}

            {socials.length > 0 && (
              <ul className="mt-5 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface/60 text-muted transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent motion-reduce:transform-none"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Barre du bas */}
        <div
          className={`mt-12 flex flex-col gap-4 border-t border-line py-6 sm:mt-16 sm:flex-row sm:items-center sm:justify-between ${reveal}`}
          style={delay(360)}
        >
          <div className="flex flex-col gap-1 text-xs text-muted sm:text-sm">
            <p>
              © {new Date().getFullYear()} {profile.name}. {t("footer.rights")}
            </p>
            <p>{t("footer.builtWith")}</p>
          </div>

          <button
            type="button"
            onClick={backToTop}
            className="group inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:w-auto"
          >
            {t("footer.backToTop")}
            <span className="transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none">
              <ArrowUpIcon />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;