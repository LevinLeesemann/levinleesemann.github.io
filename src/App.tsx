import { useEffect, useState } from 'react'
import ContactButton from './components/ContactButton'
import ContactForm from './components/ContactForm'
import NavigationBar from './components/NavigationBar'
import SettingsBar from './components/SettingsBar'
import { getTranslation } from './data/translations'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import Welcome from './sections/Welcome'
import Posts from './sections/Posts'

export default function App() {
  const [activeSection, setActiveSection] = useState("welcome")
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [isContactModalActive, setIsContactModalActive] = useState(false)
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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkModeActive)
  }, [isDarkModeActive])

  return (
    <main>
      <NavigationBar activeSection={activeSection} translation={translation} />
      <div className={isContactModalActive ? "" : "hidden"}>
        <div onClick={() => setIsContactModalActive(false)} className="fixed size-full bg-background z-30 opacity-50" />
        <ContactForm close={() => setIsContactModalActive(false)} isHidden={isContactModalActive} translation={translation} />
      </div>
      <SettingsBar isDarkModeActive={isDarkModeActive} region={region} setIsDarkModeActive={setIsDarkModeActive} setRegion={setRegion} translation={translation} />
      <div className="flex flex-col px-[8%]">
        <div className="grow max-w-5xl mx-auto">
          <Welcome isDarkModeActive={isDarkModeActive} translation={translation} />
          <div className="flex flex-col gap-32">
            <Projects isDarkModeActive={isDarkModeActive} translation={translation} />
            <Experience translation={translation} />
            <Posts translation={translation} />
          </div>
        </div>
        <Footer translation={translation} />
      </div>
      <ContactButton showContactModal={() => setIsContactModalActive(true)} translation={translation} />
    </main>
  )
}
