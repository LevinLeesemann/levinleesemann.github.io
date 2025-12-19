type Subtitle = {
  head: string
  tail: string
}

type TranslationProjects = Record<string, { title: string; description: string }>

export type Translation = {
  navigationBar: {
    buttonLabels: {
      lightDarkMode: string
      welcome: string
      projects: string
      experience: string
      language: string
    }
    handleLabels: {
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
  projectLabels: {
    downloadLabel: string
    sourceCodeLabel: string
  }
  projectsSection: {
    title: string
    subtitle: Subtitle
  }
  projects: TranslationProjects
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
