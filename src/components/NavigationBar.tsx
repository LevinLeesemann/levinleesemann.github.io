import { useRef } from "react"
import { GoBriefcase, GoFileCode } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import type { Translation } from "../models/translation"
import BarGroup from "./Bar/BarGroup"
import BarGroupButton from "./Bar/BarGroupButton"

type NavigationBarProps = {
  activeSection: string
  translation: Translation
}

export default function NavigationBar(props: NavigationBarProps) {
  const handle = useRef<HTMLDivElement>(null)

  function goTo(section: string) {
    window.location.replace(`/#${section}`)
  }

  return (
    <nav ref={handle} className="z-20 fixed inset-x-0 top-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
      <BarGroup>
        <BarGroupButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} label={props.translation.navigationBar.buttonLabel.welcome} onClick={() => { goTo("welcome") }} tooltipLocation="bottom" />
        <BarGroupButton icon={GoFileCode} isActive={props.activeSection === "projects"} label={props.translation.navigationBar.buttonLabel.projects} onClick={() => goTo("projects")} tooltipLocation="bottom" />
        <BarGroupButton icon={GoBriefcase} isActive={props.activeSection === "experience"} label={props.translation.navigationBar.buttonLabel.experience} onClick={() => goTo("experience")} tooltipLocation="bottom" />
      </BarGroup>
    </nav>
  )
}
