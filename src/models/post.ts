import type { ThumbnailUrl } from "./thumbnail-url"
import type { Translated } from "./translation"

interface PostSection {
  title: string
  content: string
}

export interface Post {
  id: string
  title: Translated<string>
  datePosted: Date
  preview: Translated<string>
  sections: Translated<PostSection>[]
  thumbnailUrl: ThumbnailUrl
}
