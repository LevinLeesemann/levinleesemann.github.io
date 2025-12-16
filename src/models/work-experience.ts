type WorkExperienceSpecialization = "Backend" | "Frontend" | "Fullstack" | "Systems"
type WorkExperienceType = "Full-time" | "Part-time" | "Contract" | "Internship"

export type WorkExperience = {
  title: string
  employer: string
  specialization?: WorkExperienceSpecialization[]
  type: WorkExperienceType[]
  isActive?: boolean
}
