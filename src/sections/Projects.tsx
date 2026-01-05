import ProjectCard from "../components/ProjectCard/ProjectCard"
import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import Title from "../components/Title"
import { projects } from "../data/projects"
import { urls } from "../data/urls"
import type { Translation } from "../models/translation"

type ProjectsProps = {
  isDarkModeActive: boolean
  translation: Translation
}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#projects")}>{props.translation.projectsSection.title}</Title>
      <Subtitle>
        {props.translation.projectsSection.subtitle.head} <SubtitleLink label="GitHub" url={urls.github} /> {props.translation.projectsSection.subtitle.tail}
      </Subtitle>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(project => <ProjectCard key={project.id} isDarkModeActive={props.isDarkModeActive} project={project} translation={props.translation} />)}
      </div>
    </section>
  )
}
