type ProjectResource = { labelId: ProjectResourceId, url: string }

export type ProjectId = "drumlineTranscriber" | "jobPostingNotifier" | "portfolioWebsite" | "tempus"

export type ProjectResourceId = "article" | "download" | "researchPaper" | "sourceCode"

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
