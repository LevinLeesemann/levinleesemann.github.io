import { useEffect, useState } from "react"
import drummerDark from "../assets/drummer/dark.gif"
import drummerLight from "../assets/drummer/light.gif"
import Subtitle from "../components/Subtitle"
import Title from "../components/Title"
import type { Translation } from "../models/translation"

type WelcomeProps = {
  isDarkModeActive: boolean
  translation: Translation
}

export default function Welcome(props: WelcomeProps) {
  const [height, setHeight] = useState(window.innerHeight)
  const [width, setWidth] = useState(window.innerWidth)
  const [scrollLocation, setScrollLocation] = useState(window.scrollY)

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

  useEffect(() => {
    const onScroll = () => {
      setScrollLocation(window.scrollY)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [scrollLocation])

  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <section id="welcome" style={{ minHeight: height }} className="col-start-1 row-start-1 z-10 flex flex-col gap-2 justify-center">
        <Title className="text-shadow">
          {props.translation.welcomeSection.title.top}<br />
          {props.translation.welcomeSection.title.bottom}
        </Title>
        <Subtitle className="text-shadow">
          {props.translation.welcomeSection.subtitle}
        </Subtitle>
      </section>
      <div className={`col-start-1 row-start-1 flex items-end justify-end w-full`} style={{ opacity: ((100 - Math.min(100, scrollLocation / 3)) / 100).toString() }}>
        <img src={props.isDarkModeActive ? drummerDark : drummerLight} className={`blur-sm`} style={{ maxHeight: height }} />
      </div>
    </div>
  )
}
