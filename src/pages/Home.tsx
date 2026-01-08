import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import type { Language } from "../models/language"
import Experience from "../sections/Experience"
import Footer from "../sections/Footer"
import Projects from "../sections/Projects"
import Welcome from "../sections/Welcome"
import Posts from "../sections/Posts"

type HomeProps = {
  isDarkModeActive: boolean
  language: Language
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
    <div className="flex flex-col px-[8%]">
      <NavigationBar activeSection={activeSection} language={props.language}/>
      <div className="grow max-w-5xl mx-auto">
        <Welcome isDarkModeActive={props.isDarkModeActive} language={props.language} />
        <div className="flex flex-col gap-32">
          <Projects isDarkModeActive={props.isDarkModeActive} language={props.language} />
          <Experience language={props.language} />
          <Posts language={props.language} />
        </div>
      </div>
      <Footer language={props.language} />
    </div>
  )
}
