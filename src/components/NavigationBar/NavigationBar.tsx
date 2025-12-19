import { DE, US } from "country-flag-icons/react/3x2"
import { useEffect, useRef, useState } from "react"
import { GoBriefcase, GoChevronUp, GoFileCode, GoMoon, GoSun } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import type { Translation } from "../../models/translation"
import Tooltip from "../Tooltip"
import NavigationBarButton from "./NavigationBarButton"
import NavigationBarGroup from "./NavigationBarGroup"

type NavigationBarProps = {
  activeSection: string
  isDarkModeActive: boolean
  region: string
  setIsDarkModeActive: (isActive: boolean) => void
  setRegion: (region: string) => void
  translation: Translation
}

export default function NavigationBar(props: NavigationBarProps) {
  const scrollSensitivity = 55

  const handle = useRef<HTMLDivElement>(null)
  const previousScrollLocation = useRef(0)

  const [isHidden, setIsHidden] = useState(false)

  function goTo(section: string) {
    window.location.replace(`/#${section}`)
    setIsHidden(true)
  }

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
      const isScrollingDown = scrollLocation - previousScrollLocation.current > scrollSensitivity
      const isScrollingUp = previousScrollLocation.current - scrollLocation > scrollSensitivity

      if (isScrollingDown && !isHidden) {
        hide()
      } else if (isScrollingUp && isHidden) {
        show()
      }

      previousScrollLocation.current = scrollLocation
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHidden])

  return (
    <div ref={handle} className="z-20 fixed inset-x-0 bottom-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
      <Tooltip margin="-mb-2" text={isHidden ? props.translation.navigationBar.handleLabel.expand : props.translation.navigationBar.handleLabel.collapse}>
        <button onClick={toggleVisibility} className="flex flex-row items-center justify-center text-text p-2.5 sm:p-3 size-10 sm:size-12 hover:cursor-pointer pointer-events-auto">
          <GoChevronUp className={`size-full transition-transform duration-250 ${isHidden ? "rotate-0" : "rotate-180"}`} />
        </button>
      </Tooltip>
      <div className="flex flex-row justify-center gap-2 pointer-events-none">
        <NavigationBarGroup>
          <NavigationBarButton icon={props.isDarkModeActive ? GoMoon : GoSun} label={props.translation.navigationBar.buttonLabel.lightDarkMode} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} />
        </NavigationBarGroup>
        <NavigationBarGroup>
          <NavigationBarButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} label={props.translation.navigationBar.buttonLabel.welcome} onClick={() => { goTo("welcome") }} />
          <NavigationBarButton icon={GoFileCode} isActive={props.activeSection === "projects"} label={props.translation.navigationBar.buttonLabel.projects} onClick={() => goTo("projects")} />
          <NavigationBarButton icon={GoBriefcase} isActive={props.activeSection === "experience"} label={props.translation.navigationBar.buttonLabel.experience} onClick={() => goTo("experience")} />
        </NavigationBarGroup>
        <NavigationBarGroup>
          <NavigationBarButton icon={props.region === "DE" ? DE : US} label={props.translation.navigationBar.buttonLabel.language} onClick={() => props.setRegion(props.region === "DE" ? "US" : "DE")} />
        </NavigationBarGroup>
      </div>
    </div>
  )
}


