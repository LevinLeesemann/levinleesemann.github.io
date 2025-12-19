import type { Project } from "../../models/project"
import type { Translation } from "../../models/translation"
import Chip from "../Chip"
import ProjectCardLink from "./ProjectCardLink"

type ProjectCardProps = {
  isDarkModeActive: boolean
  project: Project
  translation: Translation
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-text md:text-lg">{props.translation.projects[props.project.id].title}</h1>
      <a href={props.project.downloadUrl ?? props.project.sourceCodeUrl} target="_blank">
        <img src={props.isDarkModeActive ? props.project.thumbnailUrl.dark : props.project.thumbnailUrl.light} className="border-0 rounded-lg w-max aspect-2/1 object-cover hover:scale-105 transition-[scale] duration-250" alt="Random image" />
      </a>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {props.project.technologies.map(language => <Chip key={language} className="text-text" label={language}></Chip>)}
        </div>
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {props.project.languages.map(language => <Chip key={language} className="text-accent bg-accent-muted" label={language}></Chip>)}
        </div>
      </div>
      <p className="text-text-muted">{props.translation.projects[props.project.id].description}</p>
      <div className="flex flex-row gap-2 mt-auto">
        {props.project.downloadUrl && <ProjectCardLink label={props.translation.projectLabels.download} link={props.project.downloadUrl} />}
        <ProjectCardLink label={props.translation.projectLabels.sourceCode} link={props.project.sourceCodeUrl} />
      </div>
    </article>
  )
}
