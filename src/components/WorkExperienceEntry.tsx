import type { WorkExperience } from "../models/work-experience"
import Chip from "./Chip"

type ExperienceItemProps = {
  workExperience: WorkExperience
}

export default function WorkExperienceEntry({ workExperience: experienceItem }: ExperienceItemProps) {
  return (
    <div>
      <h1 className="text-text">
        {experienceItem.title}, {experienceItem.employer}
      </h1>
      <h2 className="text-text-muted">
        {experienceItem.location} ({toString(experienceItem.start)} – {typeof (experienceItem.end) == "string" ? experienceItem.end : toString(experienceItem.end)})
      </h2>
      <h2 className="text-text-muted">
        {experienceItem.type.join(", ")}
      </h2>
      <div className="flex flex-row">
        {experienceItem.specialization?.map(specialization => <Chip key={specialization} label={specialization} />)}
      </div>
    </div>
  )
}

function toString(date: Date) {
  return date.toLocaleString('en-US', { month: 'short', year: 'numeric' })
}
