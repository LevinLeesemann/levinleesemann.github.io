import WorkExperienceEntry from "../components/WorkExperienceEntry"
import { workExperiences } from "../data/work-experiences"
import type { WorkExperience as WorkExperienceModel } from "../models/work-experience"

export default function Experience() {
  return (
    <div id="experience">
      <h1 className="text-text">Experience</h1>
      <div>
        {workExperiences.map(workExperience => <WorkExperienceEntry key={toKey(workExperience)} workExperience={workExperience} />)}
      </div>
    </div>
  )
}

function toKey(workExperience: WorkExperienceModel) {
  return `${workExperience.title}${workExperience.employer}${workExperience.start.getFullYear.toString()}`
}
