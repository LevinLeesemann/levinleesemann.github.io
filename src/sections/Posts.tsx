import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import { posts } from "../data/posts"
import { translations } from "../data/translations"
import type { Language } from "../models/language"

type PostsProps = {
  language: Language
}

export default function Posts(props: PostsProps) {
  return (
    <section id="posts" className="flex flex-col gap-8">
      <Title>
        {translations[props.language].section.posts.title}
      </Title>
      <Subtitle>
        {translations[props.language].section.posts.subtitle}
      </Subtitle>
      {
        posts.map(post =>
          <div key={post.id}>
            <h1 className="text-text md:text-lg">{post.title[props.language]}</h1>
            <p className="text-text-muted">{post.subtitle[props.language]}</p>
          </div>,
        )
      }
    </section>
  )
}
