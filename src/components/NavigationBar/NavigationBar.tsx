import { GoBriefcase, GoFileCode, GoMoon, GoSun } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import NavigationBarButton from "./NavigationBarButton"
import NavigationBarGroup from "./NavigationBarGroup"

type NavigationBarProps = {
  activeSection: string
  isDarkModeActive: boolean
  setIsDarkModeActive: (isActive: boolean) => void
}

export default function NavigationBar(props: NavigationBarProps) {
  return (
    <div className="fixed flex flex-row inset-x-0 bottom-4 justify-center gap-2 pointer-events-none">
      <NavigationBarGroup>
        <NavigationBarButton icon={PiHandWaving} isActive={props.activeSection === "welcome"} onClick={() => goTo("welcome")} />
        <NavigationBarButton icon={GoFileCode} isActive={props.activeSection === "projects"} onClick={() => goTo("projects")} />
        <NavigationBarButton icon={GoBriefcase} isActive={props.activeSection === "experience"} onClick={() => goTo("experience")} />
      </NavigationBarGroup>
      <NavigationBarGroup>
        <NavigationBarButton icon={props.isDarkModeActive ? GoMoon : GoSun} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} />
      </NavigationBarGroup>
    </div>
  )
}

function goTo(section: string) {
  window.location.replace(`/#${section}`)
}
