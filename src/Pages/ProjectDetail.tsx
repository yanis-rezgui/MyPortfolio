import { useEffect, useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Projects as allProjects } from "../Data/Projects";
import { profile } from "../Data/MyProfile";

import ProjectHero from "../Components/ProjectDetail/ProjectHero";
import ProjectInfo from "../Components/ProjectDetail/ProjectInfo";
import ProjectOverview from "../Components/ProjectDetail/ProjectOverview";
import ProjectCaseStudy from "../Components/ProjectDetail/ProjectCaseStudy";
import ProjectWork from "../Components/ProjectDetail/ProjectWork";
import ProjectGallery from "../Components/ProjectDetail/ProjectGallery";
import ProjectTestimonial from "../Components/ProjectDetail/ProjectTestimonial";
import ProjectTechStack from "../Components/ProjectDetail/ProjectTechStack";
import ProjectCTA from "../Components/ProjectDetail/ProjectCTA";
import ProjectNav from "../Components/ProjectDetail/ProjectNav";
import { useLang } from "../Components/ProjectDetail/shared";

const ProjectDetail = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const published = useMemo(
    () => allProjects.filter((p) => p.published).sort((a, b) => a.order - b.order),
    []
  );

  // Le slug peut être dans n'importe quelle langue
  const index = published.findIndex((p) => p.slug.fr === slug || p.slug.en === slug);
  const project = index >= 0 ? published[index] : undefined;
  const prev = index > 0 ? published[index - 1] : undefined;
  const next = index >= 0 && index < published.length - 1 ? published[index + 1] : undefined;

  // Changement de langue : l'URL suit le slug de la langue active
  useEffect(() => {
    if (project && slug !== project.slug[lang]) {
      navigate(`/projects/${project.slug[lang]}`, { replace: true });
    }
  }, [project, slug, lang, navigate]);

  // Retour en haut à chaque changement de projet
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [project?.id]);

  // Titre de l'onglet
  useEffect(() => {
    if (project) document.title = `${project.title[lang]} – ${profile.name}`;
  }, [project, lang]);

  if (!project) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-start justify-center px-5 pt-28 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">404</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
          {t("projectDetail.notFound.title")}
        </h1>
        <p className="mt-4 max-w-md text-muted">{t("projectDetail.notFound.text")}</p>
        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center rounded-xl bg-accent px-6 text-sm font-semibold text-accent-fg transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30"
        >
          {t("projectDetail.notFound.back")}
        </Link>
      </main>
    );
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectInfo project={project} />
      <ProjectOverview project={project} />
      <ProjectCaseStudy project={project} />
      <ProjectWork project={project} />
      <ProjectGallery project={project} />
      <ProjectTestimonial project={project} />
      <ProjectTechStack project={project} />
      <ProjectCTA project={project} />
      <ProjectNav prev={prev} next={next} />
    </main>
  );
};

export default ProjectDetail;