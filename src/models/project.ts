type ProjectId = "drumlineTranscriber" | "jobPostingNotifier" | "portfolioWebsite" | "tempus"

export type Project = {
  id: ProjectId
  languages: string[]
  technologies: string[]
  thumbnailUrl: {
    dark: string
    light: string
  }
  downloadUrl?: string
  sourceCodeUrl: string
}
