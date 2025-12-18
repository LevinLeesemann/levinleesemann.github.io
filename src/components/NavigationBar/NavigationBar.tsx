import { DE, US } from "country-flag-icons/react/3x2"
import { useEffect, useRef, useState } from "react"
import { GoBriefcase, GoChevronUp, GoFileCode, GoMoon, GoSun } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import NavigationBarButton from "./NavigationBarButton"
import NavigationBarGroup from "./NavigationBarGroup"

type NavigationBarProps = {
  activeSection: string
  isDarkModeActive: boolean
  setIsDarkModeActive: (isActive: boolean) => void
}

export default function NavigationBar(props: NavigationBarProps) {
  const handle = useRef<HTMLDivElement>(null)
  const previousScrollLocation = useRef(0)
  const [isHidden, setIsHidden] = useState(false)
  const [locale, setLocale] = useState(navigator.language.split("-").at(-1))

  function show() {
    handle.current?.classList.remove("translate-y-[70%]")
    setIsHidden(false)
  }

  function hide() {
    handle.current?.classList.add("translate-y-[70%]")
    setIsHidden(true)
  }

  function toggleVisibility() {
    (isHidden ? show : hide)()
  }

  useEffect(() => {
    const onScroll = () => {
      const scrollLocation = window.scrollY
      const isScrollingDown = scrollLocation - previousScrollLocation.current > 0

      if (isScrollingDown && !isHidden) {
        hide()
      } else if (!isScrollingDown && isHidden) {
        show()
      }

      previousScrollLocation.current = scrollLocation
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHidden])

  return (
    <div ref={handle} className="fixed inset-x-0 bottom-4 flex flex-col items-center gap transition-transform duration-250">
      <button onClick={toggleVisibility} className="flex flex-row items-center justify-center text-text p-2.5 sm:p-3 size-10 sm:size-12">
        <GoChevronUp className={`size-full transition-transform duration-250 ${isHidden ? "rotate-0" : "rotate-180"}`} />
      </button>
      <div className="flex flex-row justify-center gap-2 pointer-events-none">
        <NavigationBarGroup>
          <NavigationBarButton icon={props.isDarkModeActive ? GoMoon : GoSun} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} />
        </NavigationBarGroup>
        <NavigationBarGroup>
          <NavigationBarButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} onClick={() => goTo("welcome")} />
          <NavigationBarButton icon={GoFileCode} isActive={props.activeSection === "projects"} onClick={() => goTo("projects")} />
          <NavigationBarButton icon={GoBriefcase} isActive={props.activeSection === "experience"} onClick={() => goTo("experience")} />
        </NavigationBarGroup>
        <NavigationBarGroup>
          <NavigationBarButton icon={locale === "DE" ? DE : US} onClick={() => setLocale(locale === "DE" ? "US" : "DE")} />
        </NavigationBarGroup>
      </div>
    </div>
  )
}

function goTo(section: string) {
  window.location.replace(`/#${section}`)
}
