import ProjectCard from "../components/ProjectCard/ProjectCard"
import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"
import { projects } from "../data/projects"
import { urls } from "../data/urls"

export default function Projects() {
  return (
    <section id="projects" className="mb-32">
      <SectionTitle onClick={() => window.location.replace("/#projects")}>Things I've done outside of work</SectionTitle>
      <SectionSubtitle>To explore even more projects visit my <a className="font-bold" href={urls.github} target="_blank">GitHub</a> profile</SectionSubtitle>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(project => <ProjectCard key={project.title} project={project} />)}
      </div>
    </section>
  )
}
