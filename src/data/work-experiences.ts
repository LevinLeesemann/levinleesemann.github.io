import type { WorkExperience, WorkExperienceSpecializations, WorkExperienceTypes } from "../models/work-experience"

export const workExperiences: WorkExperience[] = [
  {
    id: "senior-software-engineer",
    title: {
      english: "Senior Software Engineer",
      german: "Senior Software Engineer",
    },
    employer: {
      english: "John Deere",
      german: "John Deere",
    },
    specializationIds: ["backend"],
    typeIds: ["full-time"],
    isActive: true,
  },
  {
    id: "software-engineer-audio",
    title: {
      english: "Software Engineer - Audio",
      german: "Software Engineer - Audio",
    },
    employer: {
      english: "Kick Snare Hat Apps",
      german: "Kick Snare Hat Apps",
    },
    specializationIds: ["systems", "backend"],
    typeIds: ["contract", "part-time"],
    isActive: true,
  },
  {
    id: "software-engineer-ii",
    title: {
      english: "Software Engineer II",
      german: "Software Engineer II",
    },
    employer: {
      english: "John Deere",
      german: "John Deere",
    },
    specializationIds: ["backend", "frontend"],
    typeIds: ["full-time"],
  },
  {
    id: "software-engineer-i",
    title: {
      english: "Software Engineer I",
      german: "Software Engineer I",
    },
    employer: {
      english: "John Deere",
      german: "John Deere",
    },
    specializationIds: ["backend"],
    typeIds: ["full-time"],
  },
  {
    id: "graduate-teaching-assistant",
    title: {
      english: "Graduate Teaching Assistant",
      german: "Wissenschaftliche Hilfskraft",
    },
    employer: {
      english: "University of Iowa",
      german: "Universität von Iowa",
    },
    typeIds: ["part-time"],
  },
  {
    id: "software-engineering-intern-backend",
    title: {
      english: "Software Engineering Intern",
      german: "Software Engineer Praktikant",
    },
    employer: {
      english: "John Deere",
      german: "John Deere",
    },
    specializationIds: ["backend"],
    typeIds: ["internship"],
  },
  {
    id: "software-engineering-intern-fullstack",
    title: {
      english: "Software Engineering Intern",
      german: "Software Engineer Praktikant",
    },
    employer: {
      english: "John Deere",
      german: "John Deere",
    },
    specializationIds: ["fullstack"],
    typeIds: ["internship"],
  },
  {
    id: "software-development-intern",
    title: {
      english: "Software Development Intern",
      german: "Softwareentwickler Praktikant",
    },
    employer: {
      english: "University of Iowa",
      german: "Universität von Iowa",
    },
    specializationIds: ["fullstack"],
    typeIds: ["internship", "part-time"],
  },
  {
    id: "software-developer-audio-engineer",
    title: {
      english: "Software Developer/Audio Engineer",
      german: "Softwareentwickler/Audio Engineer",
    },
    employer: {
      english: "EON Reality",
      german: "EON Reality",
    },
    specializationIds: ["systems"],
    typeIds: ["full-time"],
  },
  {
    id: "intern",
    title: {
      english: "Intern",
      german: "Praktikant",
    },
    employer: {
      english: "German Aerospace Center",
      german: "Deutsches Zentrum für Luft- und Raumfahrt",
    },
    specializationIds: ["embedded"],
    typeIds: ["internship"],
  },
]

export const workExperienceSpecializations: WorkExperienceSpecializations = {
  backend: {
    english: "Backend",
    german: "Backend",
  },
  embedded: {
    english: "Embedded",
    german: "Embedded",
  },
  frontend: {
    english: "Frontend",
    german: "Frontend",
  },
  fullstack: {
    english: "Fullstack",
    german: "Fullstack",
  },
  systems: {
    english: "Systems",
    german: "Systems",
  },
}

export const workExperienceTypes: WorkExperienceTypes = {
  "full-time": {
    english: "Full time",
    german: "Vollzeit",
  },
  "part-time": {
    english: "Part time",
    german: "Teilzeit",
  },
  contract: {
    english: "Contract",
    german: "Vertrag",
  },
  internship: {
    english: "Internship",
    german: "Praktikum",
  },
}
