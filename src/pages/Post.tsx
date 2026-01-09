import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import { posts } from "../data/posts"
import { translations } from "../data/translations"
import type { Language } from "../models/language"

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
    <div style={{ minHeight: height }}>

    </div>
  )
}
