import ProjectCard from "../components/ProjectCard/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="font-bold mb-8 text-text text-3xl sm:text-4xl md:text-5xl">Things I've done outside of work</h1>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}
