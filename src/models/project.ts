import type { ThumbnailUrl } from "./thumbnail-url"
import type { Translated } from "./translation"

export type ProjectId = "tempus" | "drumline-transcriber" | "job-posting-notifier" | "portfolio-website"

export type Project = {
  id: ProjectId
  title: Translated<string>
  description: Translated<string>
  languages: string[]
  resources: ProjectResource[]
  technologies: string[]
  thumbnailUrl: ThumbnailUrl
}

export type ProjectResourceLabel = Record<ProjectResourceLabelId, Translated<string>>

type ProjectResource = { labelId: ProjectResourceLabelId, url: string }

type ProjectResourceLabelId = "article" | "download" | "research-paper" | "source-code"
