import { DE, US } from "country-flag-icons/react/3x2"
import { useState } from "react"
import { GoGear, GoMoon, GoSun } from "react-icons/go"
import { translations } from "../data/translations"
import type { Language } from "../models/language"
import BarGroup from "./Bar/BarGroup"
import BarGroupButton from "./Bar/BarGroupButton"

type SettingsBarProps = {
  isDarkModeActive: boolean
  language: Language
  region: string
  setIsDarkModeActive: (isActive: boolean) => void
  setRegion: (region: string) => void
}

export default function SettingsBar(props: SettingsBarProps) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <div className="fixed inset-x-0 top-4 z-20 pointer-events-none">
      <div className="mx-auto max-w-5xl relative">
        <nav className="absolute right-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
          <BarGroup isVertical={true}>
            <BarGroupButton icon={GoGear} label={isHidden ? translations[props.language].bar.settings.show : translations[props.language].bar.settings.hide} onClick={() => setIsHidden(!isHidden)} tooltipLocation="left" />
            {!isHidden && <BarGroupButton icon={props.isDarkModeActive ? GoMoon : GoSun} label={translations[props.language].bar.settings.lightDarkMode} onClick={() => props.setIsDarkModeActive(!props.isDarkModeActive)} tooltipLocation="left" />}
            {!isHidden && <BarGroupButton icon={props.region === "DE" ? DE : US} label={translations[props.language].bar.settings.language} onClick={() => props.setRegion(props.region === "DE" ? "US" : "DE")} tooltipLocation="left" />}
          </BarGroup>
        </nav>
      </div>
    </div>
  )
}
