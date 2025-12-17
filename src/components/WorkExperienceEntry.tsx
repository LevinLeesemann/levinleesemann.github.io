import type { WorkExperience } from "../models/work-experience"
import Chip from "./Chip"

type ExperienceItemProps = {
  workExperience: WorkExperience
  isFirst: boolean
  isLast: boolean
}

export default function WorkExperienceEntry(props: ExperienceItemProps) {
  return (
    <div className="flex flex-row gap-4 sm:gap-8 items-stretch">
      <div className="relative flex flex-col justify-center min-h-12">
        <div className={`absolute ${props.isFirst ? "" : "top-0"} ${props.isLast ? "" : "bottom-0"} inset-1/2 -translate-x-1/2 w-px bg-accent`} />
        <div>
          {props.workExperience.isActive && <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-accent animate-ping" />}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-accent" />
        </div>
      </div>
      <div className="flex flex-col py-4">
        <div className="flex flex-row gap-2 items-center">
          <p className="text-text">
            {props.workExperience.title}
          </p>
          <div className="flex flex-row gap-2 text-xs">
            {props.workExperience.specialization?.map(specialization => <Chip key={specialization} className="text-accent bg-accent-muted" label={specialization} />)}
          </div>
        </div>
        <p className="text-text-muted text-sm">
          {props.workExperience.employer} ({props.workExperience.type.join(", ")})
        </p>
      </div>
    </div>
  )
}
