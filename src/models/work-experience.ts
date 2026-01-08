import type { Translated } from "./translation"

export type WorkExperience = {
  id: string
  title: Translated<string>
  employer: Translated<string>
  specializationIds?: WorkExperienceSpecializationId[]
  typeIds: WorkExperienceTypeId[]
  isActive?: boolean
}

export type WorkExperienceSpecializations = Record<WorkExperienceSpecializationId, Translated<string>>

export type WorkExperienceTypes = Record<WorkExperienceTypeId, Translated<string>>

type WorkExperienceSpecializationId = "backend" | "embedded" | "frontend" | "fullstack" | "systems"

type WorkExperienceTypeId = "full-time" | "part-time" | "contract" | "internship"
