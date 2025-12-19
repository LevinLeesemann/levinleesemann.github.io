type ProjectId = "drumlineTranscriber" | "jobPostingNotifier" | "portfolioWebsite" | "tempus"
type ProjectResource = { labelId: "article" | "download" | "researchPaper" | "sourceCode", url: string }

export type Project = {
  id: ProjectId
  languages: string[]
  resources: ProjectResource[]
  technologies: string[]
  thumbnailUrl: {
    dark: string
    light: string
  }
}
