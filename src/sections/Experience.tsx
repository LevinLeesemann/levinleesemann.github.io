import WorkExperienceEntry from "../components/WorkExperienceEntry"
import { workExperiences } from "../data/work-experiences"

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="text-text">Experience</h1>
      <div>
        {workExperiences.map(workExperience => <WorkExperienceEntry key={`${workExperience.title}${workExperience.employer}${workExperience.type.toString()}${workExperience.specialization?.toString() ?? ""}`} workExperience={workExperience} />)}
      </div>
    </section>
  )
}
