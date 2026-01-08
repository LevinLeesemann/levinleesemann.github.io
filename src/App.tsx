import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactButton from './components/ContactButton'
import ContactForm from './components/ContactForm'
import SettingsBar from './components/SettingsBar'
import { toLanguage } from './models/language'
import Home from './pages/Home'
import Post from './pages/Post'

export default function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [isContactModalActive, setIsContactModalActive] = useState(false)
  const [region, setRegion] = useState(navigator.language.split("-").at(-1)?.toUpperCase() ?? "US")
  const language = toLanguage(region)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkModeActive)
  }, [isDarkModeActive])

  return (
    <main>
      <div className={isContactModalActive ? "" : "hidden"}>
        <div onClick={() => setIsContactModalActive(false)} className="fixed size-full bg-background z-30 opacity-50" />
        <ContactForm close={() => setIsContactModalActive(false)} isHidden={isContactModalActive} language={language} />
      </div>
      <SettingsBar isDarkModeActive={isDarkModeActive} language={language} region={region} setIsDarkModeActive={setIsDarkModeActive} setRegion={setRegion} />
      <ContactButton language={language} showContactModal={() => setIsContactModalActive(true)} />
      <Routes>
        <Route path="/" element={<Home isDarkModeActive={isDarkModeActive} language={language} />} />
        <Route path="/:slug" element={<Post language={language} />} />
      </Routes>
    </main>
  )
}
