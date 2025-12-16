import { useEffect, useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Welcome from './sections/Welcome'

export default function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
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
          window.history.replaceState(null, "", `#${intersectingSection}`)
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
        <div className="flex flex-col max-w-5xl min-h-dvh mx-auto px-8">
          <div className="grow">
            <Welcome />
            <Projects />
            <Experience />
          </div>
          <Footer />
        </div>
        <NavigationBar activeSection={activeSection} isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive} />
      </div>
    </div>
  )
}
