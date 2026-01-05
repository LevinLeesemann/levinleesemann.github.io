import { DE, US } from "country-flag-icons/react/3x2"
import { useState } from "react"
import { GoGear, GoMoon, GoSun } from "react-icons/go"
import type { Translation } from "../models/translation"
import BarGroup from "./Bar/BarGroup"
import BarGroupButton from "./Bar/BarGroupButton"

type SettingsBarProps = {
  isDarkModeActive: boolean
  region: string
  setIsDarkModeActive: (isActive: boolean) => void
  setRegion: (region: string) => void
  translation: Translation
}

export default function SettingsBar(props: SettingsBarProps) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="fixed inset-x-0 top-4 z-20 pointer-events-none">
      <div className="mx-auto max-w-5xl relative">
        <nav className="absolute right-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
          <BarGroup isVertical={true}>
            <BarGroupButton icon={GoGear} label={isHidden ? props.translation.settingsBar.showLabel : props.translation.settingsBar.hideLabel} onClick={() => setIsHidden(!isHidden)} tooltipLocation="left" />
            {!isHidden && <BarGroupButton icon={props.isDarkModeActive ? GoMoon : GoSun} label={props.translation.settingsBar.lightDarkMode} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} tooltipLocation="left" />}
            {!isHidden && <BarGroupButton icon={props.region === "DE" ? DE : US} label={props.translation.settingsBar.language} onClick={() => props.setRegion(props.region === "DE" ? "US" : "DE")} tooltipLocation="left" />}
          </BarGroup>
        </nav>
      </div>
    </div>
  )
}
