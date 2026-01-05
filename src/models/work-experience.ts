export type WorkExperienceId = "seniorSoftwareEngineer" | "softwareEngineerAudio" | "softwareEngineerII" | "softwareEngineerI" | "graduateTeachingAssistant" | "softwareEngineeringInternBackend" | "softwareEngineeringInternFrontend" | "softwareDevelopmentIntern" | "developerAudioEngineer" | "intern"

export type WorkExperienceSpecializationId = "backend" | "embedded" | "frontend" | "fullstack" | "systems"

export type WorkExperienceTypeId = "fullTime" | "partTime" | "contract" | "internship"

export type WorkExperience = {
  id: WorkExperienceId
  specializationIds?: WorkExperienceSpecializationId[]
  typeIds: WorkExperienceTypeId[]
  isActive?: boolean
}
