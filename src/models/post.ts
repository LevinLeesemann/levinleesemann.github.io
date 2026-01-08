import type { Translated } from "./translation"

interface PostSection {
  title: string
  content: string
}

export interface Post {
  id: string
  title: Translated<string>
  subtitle: Translated<string>
  sections: Translated<PostSection>[]
}
