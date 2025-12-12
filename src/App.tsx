import { useState } from 'react'
import Experience from './components/Experience'
import NavigationBar from './components/NavigationBar'
import Projects from './components/Projects'
import SectionBreak from './components/SectionBreak'
import Welcome from './components/Welcome'

function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <div className={isDarkModeActive ? "dark" : ""}>
      <NavigationBar isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive} />
      <div className="max-w-lg mx-auto min-h-screen flex flex-col p-5">
        <div className="grow">
          <Welcome />
          <SectionBreak />
          <Projects />
          <SectionBreak />
          <Experience />
        </div>
        <footer>
          <SectionBreak />
          <h1>
            Footer items
          </h1>
        </footer>
      </div>
    </div>
  )
}

export default App
