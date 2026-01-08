import type { ProjectId, ProjectResourceId } from "./project"
import type { WorkExperienceId, WorkExperienceSpecializationId, WorkExperienceTypeId } from "./work-experience"

type ContactFormField = { missingMessage: string, label: string, placeholder: string }
type Subtitle = { head: string, tail: string }
type TranslationWorkExperiences = Record<WorkExperienceId, { title: string; employer: string }>
type TranslationWorkExperienceSpecializations = Record<WorkExperienceSpecializationId, string>
type TranslationWorkExperienceTypes = Record<WorkExperienceTypeId, string>
type TranslationProjects = Record<ProjectId, { title: string; description: string }>
type TranslationProjectResources = Record<ProjectResourceId, string>

export type Translation = {
  navigationBar: {
    buttonLabel: {
      welcome: string
      projects: string
      experience: string
      posts: string
    }
  }
  settingsBar: {
    hideLabel: string
    showLabel: string
    language: string
    lightDarkMode: string
  },
  contactButton: {
    label: string
  },
  contactForm: {
    header: string
    email: ContactFormField
    message: ContactFormField
    buttonLabel: {
      submit: string
      cancel: string
      close: string
    }
    thankYou: string
  }
  welcomeSection: {
    title: {
      top: string
      bottom: string
    }
    subtitle: string
  }
  project: {
    resourceLabel: TranslationProjectResources
  }
  projectsSection: {
    title: string
    subtitle: Subtitle
  }
  projects: TranslationProjects
  experience: {
    specializationLabel: TranslationWorkExperienceSpecializations
    typeLabel: TranslationWorkExperienceTypes
  }
  postsSection: {
    title: string
    subtitle: string
  }
  experiences: TranslationWorkExperiences
  experienceSection: {
    and: string
    timelineEnd: string
    timelineStart: string
    title: string
    subtitle: Subtitle
  }
  footerSection: {
    builtWithText: {
      head: string
      tail?: string
    }
    drummerIconText: string
  }
}
