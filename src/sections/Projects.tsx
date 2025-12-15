import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <div id="projects">
      <h1 className="text-text">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </div>
  )
}
