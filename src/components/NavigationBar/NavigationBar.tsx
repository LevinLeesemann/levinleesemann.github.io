import { GoBriefcase, GoFileCode, GoMoon, GoSun } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import NavigationBarButton from "./NavigationBarButton"
import NavigationBarGroup from "./NavigationBarGroup"

type NavigationBarProps = {
  isDarkModeActive: boolean
  setIsDarkModeActive: (isActive: boolean) => void
}

export default function NavigationBar(props: NavigationBarProps) {
  return (
    <div className="fixed flex flex-row bottom-4 justify-center gap-2">
      <NavigationBarGroup>
        <NavigationBarButton icon={PiHandWaving} onClick={() => goTo("welcome")} />
        <NavigationBarButton icon={GoFileCode} onClick={() => goTo("projects")} />
        <NavigationBarButton icon={GoBriefcase} onClick={() => goTo("experience")} />
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
