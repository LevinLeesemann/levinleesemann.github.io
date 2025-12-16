import WorkExperienceEntry from "../components/WorkExperienceEntry"
import { workExperiences } from "../data/work-experiences"

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="font-bold mt-32 mb-8 text-text text-3xl sm:text-4xl md:text-5xl">Where I've spent most of my time</h1>
      <div className="flex flex-col">
        {workExperiences.map(workExperience => <WorkExperienceEntry key={`${workExperience.title}${workExperience.employer}${workExperience.type.toString()}${workExperience.specialization?.toString() ?? ""}`} workExperience={workExperience} isFirst={workExperiences.indexOf(workExperience) === 0} isLast={workExperiences.indexOf(workExperience) === workExperiences.length - 1} />)}
      </div>
    </section>
  )
}
