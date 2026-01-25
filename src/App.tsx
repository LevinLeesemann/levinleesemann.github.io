import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactButton from './components/ContactButton'
import ContactForm from './components/ContactForm'
import SettingsBar from './components/SettingsBar'
import { toLanguage } from './models/language'
import Home from './pages/Home'
import Post from './pages/Post'
import Footer from './sections/Footer'

export default function App() {
  const [isDarkModeActive, setIsDarkModeActive] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [isContactModalActive, setIsContactModalActive] = useState(false)
  const [locale, setLocale] = useState(navigator.language)
  const language = toLanguage(locale.split("-").at(-1)?.toUpperCase() ?? "US")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkModeActive)
  }, [isDarkModeActive])

  return (
    <main>
      <div className={isContactModalActive ? "" : "hidden"}>
        <div onClick={() => setIsContactModalActive(false)} className="fixed size-full bg-background z-30 opacity-50" />
        <ContactForm close={() => setIsContactModalActive(false)} isHidden={isContactModalActive} language={language} />
      </div>
      <SettingsBar isDarkModeActive={isDarkModeActive} language={language} region={locale} setIsDarkModeActive={setIsDarkModeActive} setRegion={setLocale} />
      <ContactButton language={language} showContactModal={() => setIsContactModalActive(true)} />
      <div className="px-[8%]">
        <div className="grow max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Home isDarkModeActive={isDarkModeActive} language={language} locale={locale} />} />
            <Route path="/:slug" element={<Post isDarkModeActive={isDarkModeActive} language={language} />} />
          </Routes>
          <Footer language={language} />
        </div>
      </div>
    </main>
  )
}
