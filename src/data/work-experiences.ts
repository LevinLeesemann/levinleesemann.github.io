import type { WorkExperience } from "../models/work-experience"

export const workExperiences: WorkExperience[] = [
  {
    id: "seniorSoftwareEngineer",
    specializationIds: ["backend"],
    typeIds: ["fullTime"],
    isActive: true,
  },
  {
    id: "softwareEngineerAudio",
    specializationIds: ["systems", "backend"],
    typeIds: ["contract", "partTime"],
    isActive: true,
  },
  {
    id: "softwareEngineerII",
    specializationIds: ["backend", "frontend"],
    typeIds: ["fullTime"],
  },
  {
    id: "softwareEngineerI",
    specializationIds: ["backend"],
    typeIds: ["fullTime"],
  },
  {
    id: "graduateTeachingAssistant",
    typeIds: ["partTime"],
  },
  {
    id: "softwareEngineeringInternBackend",
    specializationIds: ["backend"],
    typeIds: ["internship"],
  },
  {
    id: "softwareEngineeringInternFrontend",
    specializationIds: ["fullstack"],
    typeIds: ["internship"],
  },
  {
    id: "softwareDevelopmentIntern",
    specializationIds: ["fullstack"],
    typeIds: ["internship", "partTime"],
  },
  {
    id: "developerAudioEngineer",
    specializationIds: ["systems"],
    typeIds: ["fullTime"],
  },
  {
    id: "intern",
    specializationIds: ["embedded"],
    typeIds: ["internship"],
  },
]
