import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../Contexts/ThemeContext";
import type { Language } from "../../Types/Common";

const NAV_LINKS = ["work", "about", "services", "process", "skills"] as const;
const LANGUAGES: Language[] = ["fr", "en"];

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const SunIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = () => (
  <svg {...iconProps}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
  </svg>
);

const MenuIcon = () => (
  <svg {...iconProps}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg {...iconProps}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Header = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  const currentLang = (i18n.resolvedLanguage ?? i18n.language ?? "fr").slice(
    0,
    2
  ) as Language;

  // Langue du document (accessibilité + SEO)
  useEffect(() => {
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  // Ombre + fond plus marqué dès que la page défile
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lien actif selon la section visible
  useEffect(() => {
    const sections = NAV_LINKS.map((key) => document.getElementById(key)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Fermer le menu mobile avec Échap
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
      <div className="mx-auto max-w-6xl">
        <div
          className={`flex h-14 items-center justify-between gap-4 rounded-2xl border border-line px-3 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "bg-bg/85 shadow-lg shadow-black/5"
              : "bg-bg/60"
          }`}
        >
          {/* Marque */}
          <a
            href="#"
            aria-label={t("header.home")}
            className="flex items-center gap-2.5 rounded-lg pr-2"
          >
            <span className="font-display flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-base font-bold text-accent">
              YR
            </span>
            <span className="text-lg font-extrabold tracking-tight sm:text-xl">
              Yanis Rezgui
            </span>
          </a>

          {/* Navigation desktop */}
          <nav aria-label={t("header.navLabel")} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((key) => {
                const isActive = active === key;
                return (
                  <li key={key}>
                    <a
                      href={`#${key}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-surface-2 text-fg"
                          : "text-muted hover:text-fg"
                      }`}
                    >
                      {t(`header.${key}`)}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div
              role="group"
              aria-label={t("header.language")}
              className="flex rounded-lg border border-line p-0.5"
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => i18n.changeLanguage(lang)}
                  aria-pressed={lang === currentLang}
                  className={`h-8 rounded-md px-2.5 text-xs font-semibold transition-colors ${
                    lang === currentLang
                      ? "bg-accent text-accent-fg"
                      : "text-muted hover:text-fg"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? t("header.switchToLight")
                  : t("header.switchToDark")
              }
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:text-fg"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <a
              href="#contact"
              className="hidden h-9 items-center rounded-lg bg-accent px-4 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 lg:inline-flex"
            >
              {t("header.contact")}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? t("header.closeMenu") : t("header.openMenu")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-muted transition-colors hover:text-fg lg:hidden"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`grid transition-[grid-template-rows,opacity,margin,visibility] duration-300 ease-out motion-reduce:transition-none lg:hidden ${
            menuOpen
              ? "visible mt-2 grid-rows-[1fr] opacity-100"
              : "invisible mt-0 grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            id="mobile-menu"
            aria-label={t("header.navLabel")}
            className="overflow-hidden"
          >
            <div
              className={`rounded-2xl border border-line bg-surface/95 p-2 backdrop-blur-xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
                menuOpen ? "translate-y-0" : "-translate-y-2"
              }`}
            >
            <ul className="flex flex-col">
              {NAV_LINKS.map((key) => (
                <li key={key}>
                  <a
                    href={`#${key}`}
                    onClick={closeMenu}
                    aria-current={active === key ? "location" : undefined}
                    className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      active === key
                        ? "bg-surface-2 text-fg"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {t(`header.${key}`)}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 flex h-11 items-center justify-center rounded-lg bg-accent text-sm font-semibold text-accent-fg"
            >
              {t("header.contact")}
            </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;