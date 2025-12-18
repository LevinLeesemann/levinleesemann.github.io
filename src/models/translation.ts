type Subtitle = {
  head: string
  tail: string
}

type TranslationProjects = Record<string, { title: string; description: string }>

export type Translation = {
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
}
