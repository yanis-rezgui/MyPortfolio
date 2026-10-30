import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { contact, profile } from "../../Data/MyProfile";


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

const MAX_MESSAGE = 1000;
const SUBJECTS = ["project", "freelance", "internship", "collaboration", "other"] as const;

const socialLink = (name: string) =>
  contact.socials.find((s) => s.name.toLowerCase() === name.toLowerCase())?.link;

/* ---------- icônes ---------- */

const Icon = ({
  children,
  size = 20,
  className,
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) => (
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
    className={className}
  >
    {children}
  </svg>
);

const WhatsAppIcon = () => (
  <Icon>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .75a3.5 3.5 0 0 1-1.75-1.75l.75-1-1-2Z" />
  </Icon>
);
const MailIcon = () => (
  <Icon>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </Icon>
);
const LinkedInIcon = () => (
  <Icon>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const InstagramIcon = ({ size }: { size?: number }) => (
  <Icon size={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </Icon>
);
const GitHubIcon = () => (
  <Icon>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </Icon>
);
const MapPinIcon = () => (
  <Icon size={16}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const ClockIcon = () => (
  <Icon size={16}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </Icon>
);
const ArrowUpRightIcon = () => (
  <Icon size={18}>
    <path d="M7 7h10v10M7 17 17 7" />
  </Icon>
);
const SendIcon = () => (
  <Icon size={18}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Icon>
);
const CheckIcon = () => (
  <Icon size={18}>
    <path d="M20 6 9 17l-5-5" />
  </Icon>
);
const AlertIcon = () => (
  <Icon size={18}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" />
  </Icon>
);
const ChevronDownIcon = () => (
  <Icon size={16}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);
const SpinnerIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
    className="animate-spin motion-reduce:animate-none"
  >
    <path d="M21 12a9 9 0 1 1-6.2-8.55" />
  </svg>
);

/* ---------- carte de contact ---------- */

const ContactCard = ({
  href,
  icon,
  title,
  value,
  hint,
  index,
  visible,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  hint: string;
  index: number;
  visible: boolean;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group flex items-center gap-4 rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur transition-colors duration-300 hover:border-accent/60 sm:p-5 ${
      visible ? "hero-reveal" : "opacity-0"
    }`}
    style={delay(150 + index * 100)}
  >
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-fg">
      {icon}
    </span>
    <span className="min-w-0 flex-1">
      <span className="block text-xs font-medium text-muted">{title}</span>
      <span className="mt-0.5 block truncate text-[0.95rem] font-semibold sm:text-base">{value}</span>
      <span className="mt-0.5 block text-xs text-muted">{hint}</span>
    </span>
    <span className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transition-none">
      <ArrowUpRightIcon />
    </span>
  </a>
);

/* ---------- styles de champs ---------- */

const labelCls = "mb-1.5 block text-sm font-medium";
const fieldCls =
  "w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-[0.95rem] outline-none transition-colors placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

/* ---------- section ---------- */

const Contact = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>(0.1);
  const { ref: formRef, inView: formInView } = useInView<HTMLDivElement>(0.1);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [count, setCount] = useState(0);

  const linkedin = socialLink("LinkedIn");
  const github = socialLink("GitHub");
  const instagram = socialLink("Instagram");
  const instagramHandle = instagram ? `@${instagram.split("/").filter(Boolean).pop()}` : "";

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    t("contact.whatsapp.message")
  )}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent(
    t("contact.email.subject")
  )}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot anti-spam : un humain ne remplit jamais ce champ caché
    if (formData.get("website")) return;

    setLoading(true);
    setSuccess(false);
    setError(false);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          phone,
          subject,
          message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);
      form.reset();
      setCount(0);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const availability = (
    [
      ["freelance", profile.availability.freelance],
      ["internship", profile.availability.internship],
      ["fullTime", profile.availability.fullTime],
    ] as const
  ).filter(([, on]) => on);

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl overflow-x-clip px-5 py-16 sm:px-6 sm:py-24"
    >
      {/* En-tête */}
      <div ref={ref} className={inView ? "hero-reveal" : "opacity-0"} style={delay(0)}>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent sm:text-sm">
          {t("contact.eyebrow")}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{t("contact.title")}</h2>
        <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-4 sm:text-lg">
          {t("contact.subtitle")}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t("contact.responseTime")}
          </span>
          {profile.location && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted sm:text-sm">
              <MapPinIcon />
              {profile.location}
            </span>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-5 lg:gap-10">
        {/* Colonne gauche */}
        <div ref={leftRef} className="flex flex-col gap-4 lg:col-span-2">
          <ContactCard
            href={whatsappHref}
            icon={<WhatsAppIcon />}
            title="WhatsApp"
            value={contact.phone}
            hint={t("contact.whatsapp.hint")}
            index={0}
            visible={leftInView}
          />
          <ContactCard
            href={gmailHref}
            icon={<MailIcon />}
            title={t("contact.email.title")}
            value={contact.email}
            hint={t("contact.email.hint")}
            index={1}
            visible={leftInView}
          />
          {linkedin && (
            <ContactCard
              href={linkedin}
              icon={<LinkedInIcon />}
              title="LinkedIn"
              value={t("contact.linkedin.value")}
              hint={t("contact.linkedin.hint")}
              index={2}
              visible={leftInView}
            />
          )}

          {/* Instagram : créateur de contenu */}
          {instagram && (
            <div
              className={`relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur sm:p-6 ${
                leftInView ? "hero-reveal" : "opacity-0"
              }`}
              style={delay(450)}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
              />
              <div className="relative flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-fg">
                  <InstagramIcon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {t("contact.instagram.badge")}
                  </p>
                  <p className="truncate text-sm font-semibold">{instagramHandle}</p>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-muted">
                {t("contact.instagram.description")}
              </p>
              <a
                href={instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-line bg-surface/60 px-4 text-sm font-semibold transition-colors hover:border-accent hover:text-accent sm:h-10 sm:w-auto"
              >
                {t("contact.instagram.cta")}
                <ArrowUpRightIcon />
              </a>
            </div>
          )}

          {/* Disponibilités + GitHub */}
          <div
            className={`flex flex-wrap items-center justify-between gap-3 px-1 pt-2 ${
              leftInView ? "hero-reveal" : "opacity-0"
            }`}
            style={delay(550)}
          >
            {availability.length > 0 && (
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                <span className="font-medium">{t("contact.availableFor")}</span>
                {availability.map(([key]) => (
                  <span
                    key={key}
                    className="rounded-md border border-line bg-surface-2 px-2 py-1 font-medium"
                  >
                    {t(`contact.availability.${key}`)}
                  </span>
                ))}
              </p>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        </div>

        {/* Formulaire */}
        <div
          ref={formRef}
          className={`rounded-2xl border border-line bg-surface/70 p-5 backdrop-blur sm:p-8 lg:col-span-3 ${
            formInView ? "hero-reveal" : "opacity-0"
          }`}
          style={delay(150)}
        >
          <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{t("contact.form.title")}</h3>
          <p className="mt-1.5 flex items-center gap-2 text-sm text-muted">
            <ClockIcon />
            {t("contact.form.subtitle")}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5" noValidate={false}>
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelCls}>
                  {t("contact.form.name")} <span className="text-accent">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  autoComplete="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelCls}>
                  {t("contact.form.email")} <span className="text-accent">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className={fieldCls}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className={labelCls}>
                  {t("contact.form.phone")}{" "}
                  <span className="text-xs font-normal text-muted">({t("contact.form.optional")})</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+213 ..."
                  className={fieldCls}
                />
              </div>
              <div>
                <label htmlFor="contact-subject" className={labelCls}>
                  {t("contact.form.subject")} <span className="text-accent">*</span>
                </label>
                <div className="relative">
                  <select
                    id="contact-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className={`${fieldCls} cursor-pointer appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      {t("contact.form.subjectPlaceholder")}
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={t(`contact.form.subjects.${s}`)}>
                        {t(`contact.form.subjects.${s}`)}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted">
                    <ChevronDownIcon />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between">
                <label htmlFor="contact-message" className={labelCls}>
                  {t("contact.form.message")} <span className="text-accent">*</span>
                </label>
                <span className="mb-1.5 text-xs tabular-nums text-muted">
                  {count}/{MAX_MESSAGE}
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={MAX_MESSAGE}
                rows={6}
                onChange={(e) => setCount(e.target.value.length)}
                placeholder={t("contact.form.messagePlaceholder")}
                className={`${fieldCls} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  {t("contact.form.send")}
                  <SendIcon />
                </>
              )}
            </button>

            {/* Retours */}
            <div aria-live="polite">
              {success && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-700 dark:text-emerald-400"
                >
                  <span className="mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  <span>
                    <span className="block font-semibold">{t("contact.form.successTitle")}</span>
                    <span className="mt-0.5 block opacity-90">{t("contact.form.successText")}</span>
                  </span>
                </div>
              )}
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-700 dark:text-red-400"
                >
                  <span className="mt-0.5 shrink-0">
                    <AlertIcon />
                  </span>
                  <span>
                    <span className="block font-semibold">{t("contact.form.errorTitle")}</span>
                    <span className="mt-0.5 block opacity-90">
                      {t("contact.form.errorText", { email: contact.email })}
                    </span>
                  </span>
                </div>
              )}
            </div>

            <p className="text-xs leading-relaxed text-muted">{t("contact.form.privacy")}</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;