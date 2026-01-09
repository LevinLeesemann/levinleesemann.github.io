import Card from "../components/Card/Card"
import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import Title from "../components/Title"
import { projectResourceLabels, projects } from "../data/projects"
import { translations } from "../data/translations"
import { urls } from "../data/urls"
import type { Language } from "../models/language"

type ProjectsProps = {
  isDarkModeActive: boolean
  language: Language
}

export default function Projects(props: ProjectsProps) {
  return (
    <section id="projects" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#projects")}>{translations[props.language].section.projects.title}</Title>
      <Subtitle>
        {translations[props.language].section.projects.subtitle.head} <SubtitleLink label="GitHub" url={urls.github} /> {translations[props.language].section.projects.subtitle.tail}
      </Subtitle>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(project =>
          <Card key={project.id} accentChipLabels={project.languages} chipLabels={project.technologies} description={project.description[props.language]} links={project.resources.map(resource => { return { isExternal: true, label: projectResourceLabels[resource.labelId][props.language], url: resource.url } })} isDarkModeActive={props.isDarkModeActive} thumbnail={project.thumbnailUrl} title={project.title[props.language]} />,
        )}
      </div>
    </section>
  )
}
