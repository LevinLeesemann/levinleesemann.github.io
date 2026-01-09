import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import type { Language } from "../models/language"
import Experience from "../sections/Experience"
import Posts from "../sections/Posts"
import Projects from "../sections/Projects"
import Welcome from "../sections/Welcome"

type HomeProps = {
  isDarkModeActive: boolean
  language: Language
  locale: string
}

export default function Home(props: HomeProps) {
  const [activeSection, setActiveSection] = useState("welcome")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (intersectionCandidates) => {
        intersectionCandidates.forEach((intersectionCandidate) => {
          if (!intersectionCandidate.isIntersecting) {
            return
          }

          const intersectingSection = intersectionCandidate.target.id

          if (intersectingSection === activeSection) {
            return
          }

          setActiveSection(intersectingSection)
        })
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    )

    document
      .querySelectorAll<HTMLElement>("section[id]")
      .forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [activeSection])

  return (
    <div>
      <NavigationBar activeSection={activeSection} language={props.language} />
      <Welcome isDarkModeActive={props.isDarkModeActive} language={props.language} />
      <div className="flex flex-col gap-32">
        <Projects isDarkModeActive={props.isDarkModeActive} language={props.language} />
        <Experience language={props.language} />
        <Posts isDarkModeActive={props.isDarkModeActive} language={props.language} locale={props.locale} />
      </div>
    </div>
  )
}
