import { useState } from "react";
import { useTranslation } from "react-i18next";

import type { Project } from "../../Types/Project";
import { QuoteIcon, delay, sectionClass, useInView, useLang } from "./shared";

const ProjectTestimonial = ({ project }: { project: Project }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const { ref, inView } = useInView<HTMLDivElement>();
  const [avatarFailed, setAvatarFailed] = useState(false);

  const testimonial = project.details?.testimonial;
  if (!testimonial) return null;

  const reveal = inView ? "hero-reveal" : "opacity-0";
  const initials = testimonial.author
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  const role = [testimonial.position?.[lang], testimonial.company].filter(Boolean).join(" · ");

  return (
    <section className={sectionClass}>
      <div ref={ref}>
        <figure
          className={`relative overflow-hidden rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur sm:rounded-3xl sm:p-12 ${reveal}`}
          style={delay(0)}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
          />

          <p className="relative text-xs font-semibold uppercase tracking-widest text-accent">
            {t("projectDetail.testimonial.eyebrow")}
          </p>
          <span className="relative mt-5 block text-accent/60">
            <QuoteIcon />
          </span>

          <blockquote className="relative mt-4 text-xl font-medium leading-relaxed tracking-tight sm:text-3xl">
            {testimonial.content[lang]}
          </blockquote>

          <figcaption className="relative mt-8 flex items-center gap-4">
            {testimonial.avatar && !avatarFailed ? (
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                loading="lazy"
                onError={() => setAvatarFailed(true)}
                className="h-12 w-12 rounded-full border border-line object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="font-display flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface-2 text-sm font-bold text-accent"
              >
                {initials}
              </span>
            )}
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold sm:text-base">{testimonial.author}</p>
              {role && <p className="truncate text-xs text-muted sm:text-sm">{role}</p>}
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default ProjectTestimonial;