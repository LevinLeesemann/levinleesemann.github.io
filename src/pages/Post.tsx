import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import HomeButton from "../components/HomeButton"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import { posts } from "../data/posts"
import { translations } from "../data/translations"
import type { Language } from "../models/language"
import { isImage } from "../models/post"

type PostProps = {
  language: Language
}

export default function Post(props: PostProps) {
  const navigate = useNavigate()
  const { slug } = useParams()
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)

  const post = posts.find(post => post.id === slug)

  useEffect(() => {
    const handleResize = () => {
      const newHeight = window.innerHeight
      const newWidth = window.innerWidth

      if (newWidth === width) {
        return
      }

      setWidth(newWidth)
      setHeight(newHeight)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [height, width])

  if (!post) {
    return (
      <div style={{ minHeight: height }} className="flex flex-col justify-center items-center gap-4">
        <Title>
          404 — {translations[props.language].post.notFound.title}
        </Title>
        <Subtitle>
          <button className="font-bold inline-flex items-center gap-1 hover:cursor-pointer" onClick={() => void navigate("/")}>
            {translations[props.language].post.notFound.subtitle.head}
          </button> — {translations[props.language].post.notFound.subtitle.tail}
        </Subtitle>
      </div>
    )
  }

  return (
    <div>
      <HomeButton language={props.language} />
      <article>
        <header style={{ minHeight: height }} className="flex flex-col justify-center gap-4">
          <h1 className="w-fit font-bold text-text text-3xl sm:text-4xl md:text-5xl">
            {post.title[props.language]}
          </h1>
          <hr className="border-accent" />
          <p className="text-text-muted text-md sm:text-lg md:text-xl lg:text-2xl">
            {post.preview[props.language]}
          </p>
        </header>
        <div className="flex flex-col gap-32">
          {
            post.sections.map(section =>
              <section id={section.id} key={section.id} className="flex flex-col gap-8">
                <div className="flex flex-row gap-4 items-center">
                  <div className="relative size-2 rounded-full bg-accent" />
                  <h2 className="w-fit text-text text-2xl sm:text-3xl md:text-4xl hover:cursor-pointer">
                    <a onClick={() => window.location.replace(`#${section.id}`)}>
                      {section.title[props.language]}
                    </a>
                  </h2>
                </div>
                <div className="flex flex-col gap-8">
                  {section.content.map((content, index) =>
                    isImage(content) ?
                      <img key={`${section.id}-${index.toString()}`} className="self-center" src={content.url} /> :
                      typeof (content) == "string" ?
                        <p key={`${section.id}-${index.toString()}`} className="font-mono text-text-muted text-xs sm:text-sm md:text-base lg:text-lg whitespace-pre-wrap">{content}</p> :
                        <p key={`${section.id}-${index.toString()}`} className="font-light text-text text-base sm:text-lg md:text-xl lg:text-2xl">{content[props.language]}</p>,
                  )}
                </div>
              </section>,
            )
          }
        </div>
      </article>
    </div>
  )
}
