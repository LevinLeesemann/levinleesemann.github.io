type Subtitle = { head: string, tail: string }
type TranslationExperienceId = "seniorSoftwareEngineer" | "softwareEngineer" | "softwareEngineerII" | "softwareEngineerI" | "graduateTeachingAssistant" | "softwareEngineeringInternBackend" | "softwareEngineeringInternFrontend" | "softwareDevelopmentIntern"
type TranslationExperiences = Record<TranslationExperienceId, { title: string; employer: string }>
type TranslationProjectId = "drumlineTranscriber" | "jobPostingNotifier" | "portfolioWebsite" | "tempus"
type TranslationProjects = Record<TranslationProjectId, { title: string; description: string }>

export type Translation = {
  navigationBar: {
    buttonLabel: {
      lightDarkMode: string
      welcome: string
      projects: string
      experience: string
      language: string
    }
    handleLabel: {
      collapse: string
      expand: string
    }
  }
  welcomeSection: {
    title: {
      top: string
      bottom: string
    }
    subtitle: string
  }
  project: {
    resourceLabel: {
      article: string
      download: string
      researchPaper: string
      sourceCode: string
    }
  }
  projectsSection: {
    title: string
    subtitle: Subtitle
  }
  projects: TranslationProjects
  experience: {
    specializationLabel: {
      backend: string
      frontend: string
      fullstack: string
      systems: string
    }
    typeLabel: {
      fullTime: string
      partTime: string
      contract: string
      internship: string
    }
  }
  experiences: TranslationExperiences
  experienceSection: {
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
