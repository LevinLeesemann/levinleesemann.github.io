import { useEffect, useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import { getTranslation } from './data/translations'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Welcome from './sections/Welcome'

export default function App() {
  const [activeSection, setActiveSection] = useState("welcome")
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [region, setRegion] = useState(navigator.language.split("-").at(-1)?.toUpperCase() ?? "US")
  const translation = getTranslation(region)

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
    <div className={isDarkModeActive ? "dark" : ""}>
      <div className="bg-background">
        <div className="flex flex-col px-[8%]">
          <div className="grow max-w-5xl mx-auto">
            <Welcome isDarkModeActive={isDarkModeActive} translation={translation} />
            <div className="flex flex-col gap-32">
              <Projects translation={translation} />
              <Experience translation={translation} />
            </div>
          </div>
          <Footer translation={translation} />
        </div>
        <NavigationBar activeSection={activeSection} isDarkModeActive={isDarkModeActive} region={region} setIsDarkModeActive={setIsDarkModeActive} setRegion={setRegion} />
      </div>
    </div>
  )
}
