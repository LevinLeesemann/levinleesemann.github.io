import { useRef } from "react"
import { GoBook, GoBriefcase, GoFileCode } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import { translations } from "../data/translations"
import type { Language } from "../models/language"
import BarGroup from "./Bar/BarGroup"
import BarGroupButton from "./Bar/BarGroupButton"

type NavigationBarProps = {
  activeSection: string
  language: Language
}

export default function NavigationBar(props: NavigationBarProps) {
  const handle = useRef<HTMLDivElement>(null)

  function goTo(section: string) {
    window.location.replace(`/#${section}`)
  }

  return (
    <nav ref={handle} className="z-20 fixed inset-x-0 top-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
      <BarGroup>
        <BarGroupButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} label={translations[props.language].bar.navigation.welcome} onClick={() => { goTo("welcome") }} tooltipLocation="bottom" />
        <BarGroupButton icon={GoFileCode} isActive={props.activeSection === "projects"} label={translations[props.language].bar.navigation.projects} onClick={() => goTo("projects")} tooltipLocation="bottom" />
        <BarGroupButton icon={GoBriefcase} isActive={props.activeSection === "experience"} label={translations[props.language].bar.navigation.experience} onClick={() => goTo("experience")} tooltipLocation="bottom" />
        <BarGroupButton icon={GoBook} isActive={props.activeSection === "posts"} label={translations[props.language].bar.navigation.posts} onClick={() => goTo("posts")} tooltipLocation="bottom" />
      </BarGroup>
    </nav>
  )
}
