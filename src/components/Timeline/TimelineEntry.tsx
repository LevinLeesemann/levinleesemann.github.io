import { translations } from "../../data/translations"
import { workExperienceSpecializations, workExperienceTypes } from "../../data/work-experiences"
import type { Language } from "../../models/language"
import type { WorkExperience } from "../../models/work-experience"
import Chip from "../Chip"
import TimelineText from "./TimelineText"

type TimelineEntryProps = {
  isFirst: boolean
  isLast: boolean
  language: Language
  workExperiences: WorkExperience[]
}

export default function TimelineEntry(props: TimelineEntryProps) {
  return (
    <div className="flex flex-row gap-4 sm:gap-8 items-stretch">
      <div className="relative flex flex-col justify-center min-h-12">
        <div className={`absolute ${props.isFirst ? "" : "top-0"} ${props.isLast ? "" : "bottom-0"} inset-1/2 -translate-x-1/2 w-px bg-accent`} />
        <div>
          {props.isFirst && <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-accent animate-ping" />}
          <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 size-2 rounded-full bg-accent" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start py-4 gap-2 md:gap-0">
        {props.workExperiences.map((workExperience, index) =>
          <div key={workExperience.id} className="flex flex-row items-center">
            {index !== 0 && <TimelineText className="hidden md:block px-4" text={translations[props.language].section.experience.and} />}
            <div>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-text">
                  {workExperience.title[props.language]}
                </p>
                <div className="flex flex-row gap-1 text-xs">
                  {workExperience.specializationIds?.map(id => <Chip key={id} className="text-text bg-background" label={workExperienceSpecializations[id][props.language]} />)}
                </div>
              </div>
              <p className="text-text-muted text-sm">
                {workExperience.employer[props.language]} ({workExperience.typeIds.map(id => workExperienceTypes[id][props.language]).join(", ")})
              </p>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
