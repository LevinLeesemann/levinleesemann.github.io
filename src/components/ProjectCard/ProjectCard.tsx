import { useState } from "react"
import { projectResourceLabels } from "../../data/projects"
import type { Language } from "../../models/language"
import type { Project } from "../../models/project"
import Chip from "../Chip"
import ProjectCardLink from "./ProjectCardLink"

type ProjectCardProps = {
  isDarkModeActive: boolean
  language: Language
  project: Project
}

export default function ProjectCard(props: ProjectCardProps) {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false)

  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-text md:text-lg">{props.project.title[props.language]}</h1>
      <a href={props.project.resources.at(0)?.url} target="_blank">
        {!isThumbnailLoaded &&
          <div className="flex items-center justify-center w-full aspect-2/1">
            <div className="size-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          </div>
        }
        <img src={props.isDarkModeActive ? props.project.thumbnailUrl.dark : props.project.thumbnailUrl.light} className={`${isThumbnailLoaded ? "" : "hidden"} border-0 rounded-lg w-max aspect-2/1 object-cover hover:scale-105 transition-[scale] duration-250`} onLoad={() => setIsThumbnailLoaded(true)} />
      </a>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {props.project.technologies.map(language => <Chip key={language} className="text-text" label={language} />)}
        </div>
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {props.project.languages.map(language => <Chip key={language} className="text-accent bg-accent-muted" label={language} />)}
        </div>
      </div>
      <p className="text-text-muted">{props.project.description[props.language]}</p>
      <div className="flex flex-row flex-wrap gap-2 mt-auto">
        {props.project.resources.map(resource => <ProjectCardLink key={resource.labelId} label={projectResourceLabels[resource.labelId][props.language]} link={resource.url} />)}
      </div>
    </article>
  )
}
