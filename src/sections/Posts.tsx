import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import type { Translation } from "../models/translation"

type PostsProps = {
  translation: Translation
}

export default function Posts(props: PostsProps) {
  return (
    <section id="posts" className="flex flex-col gap-8">
      <Title>
        {props.translation.postsSection.title}
      </Title>
      <Subtitle>
        {props.translation.postsSection.subtitle}
      </Subtitle>
    </section>
  )
}
