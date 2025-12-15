import { useState } from 'react'
import NavigationBar from './components/NavigationBar/NavigationBar'
import Experience from './sections/Experience'
import Footer from './sections/Footer'
import Projects from './sections/Projects'
import SectionBreak from './sections/SectionBreak'
import Welcome from './sections/Welcome'

export default function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <div className={isDarkModeActive ? "dark" : ""}>
      <div className="bg-background">
        <div className="flex flex-col max-w-5xl min-h-dvh mx-auto px-8">
          <div className="grow">
            <Welcome />
            <SectionBreak />
            <Projects />
            <SectionBreak />
            <Experience />
          </div>
          <Footer />
        </div>
        <NavigationBar isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive} />
      </div>
    </div>
  )
}
