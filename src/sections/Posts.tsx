import Card from "../components/Card/Card"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import { posts } from "../data/posts"
import { translations } from "../data/translations"
import type { Language } from "../models/language"

type PostsProps = {
  isDarkModeActive: boolean
  language: Language
  locale: string
}

export default function Posts(props: PostsProps) {
  return (
    <section id="posts" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#posts")}>
        {translations[props.language].section.posts.title}
      </Title>
      <Subtitle>
        {translations[props.language].section.posts.subtitle}
      </Subtitle>
      <div className="grid gap-16 grid-cols-1 sm:grid-cols-2">
        {posts.map((post, index) =>
          <Card key={post.id} accentChipLabels={index === 0 ? [translations[props.language].section.posts.new] : []} chipLabels={[post.datePosted.toLocaleDateString(props.locale, { year: 'numeric', month: 'short', day: 'numeric' })]} description={post.preview[props.language]} links={[{ isExternal: false, label: translations[props.language].section.posts.readMore, url: post.id }]} isDarkModeActive={props.isDarkModeActive} thumbnail={post.thumbnailUrl} title={post.title[props.language]} />,
        )}
      </div>
    </section>
  )
}
