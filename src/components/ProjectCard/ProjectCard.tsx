import type { Project } from "../../models/project"
import Chip from "../Chip"
import ProjectCardLink from "./ProjectCardLink"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-text md:text-lg">{project.title}</h1>
      <a href={project.downloadUrl ?? project.sourceCodeUrl} target="_blank">
        <img src={project.thumbnailUrl} className="border-0 rounded-lg w-max aspect-2/1 object-cover" alt="Random image" />
      </a>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {project.technologies.map(language => <Chip key={language} className="text-text" label={language}></Chip>)}
        </div>
        <div className="flex flex-row flex-wrap gap-2 text-sm">
          {project.languages.map(language => <Chip key={language} className="text-accent bg-accent-muted" label={language}></Chip>)}
        </div>
      </div>
      <p className="text-text-muted">{project.description}</p>
      <div className="flex flex-row gap-2 mt-auto">
        {project.downloadUrl && <ProjectCardLink label="Download" link={project.downloadUrl} />}
        <ProjectCardLink label="Source code" link={project.sourceCodeUrl} />
      </div>
    </article>
  )
}
