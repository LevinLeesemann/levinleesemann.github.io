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
  content: Translated<string>
}
