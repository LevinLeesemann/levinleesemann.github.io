import ProjectCard from "../components/ProjectCard/ProjectCard"
import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"
import { projects } from "../data/projects"
import { urls } from "../data/urls"
import type { Translation } from "../models/translation"

type ProjectsProps = {
  translation: Translation
}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="mb-32">
      <SectionTitle onClick={() => window.location.replace("/#projects")}>{props.translation.projectsSection.title}</SectionTitle>
      <SectionSubtitle>{props.translation.projectsSection.subtitle.head} <a className="font-bold" href={urls.github} target="_blank">GitHub</a> {props.translation.projectsSection.subtitle.tail}</SectionSubtitle>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(project => <ProjectCard key={project.id} project={project} translation={props.translation} />)}
      </div>
    </section>
  )
}
