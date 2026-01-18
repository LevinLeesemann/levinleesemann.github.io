import type { ThumbnailUrl } from "./thumbnail-url"
import type { Translated } from "./translation"

export type Post = {
  id: string
  title: Translated<string>
  datePosted: Date
  preview: Translated<string>
  sections: PostSection[]
  thumbnailUrl: ThumbnailUrl
}

type PostSection = {
  id: string
  title: Translated<string>
  content: PostSectionContent[]
}

type PostSectionContent = Translated<string> | Image | string

type Image = {
  url: string,
  label: Translated<string>
}

export function isImage(content: PostSectionContent): content is Image {
  return typeof content != "string" && "url" in content && "label" in content
}
