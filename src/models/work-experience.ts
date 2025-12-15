type WorkExperienceSpecialization = "Backend" | "Frontend" | "Fullstack" | "Systems"
type WorkExperienceType = "Full-time" | "Part-time" | "Contract" | "Internship"

export type WorkExperience = {
  title: string
  employer: string
  location: string
  specialization?: WorkExperienceSpecialization[]
  type: WorkExperienceType[]
  start: Date
  end: Date | "Present"
}
