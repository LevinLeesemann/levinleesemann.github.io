import { FiSun } from "react-icons/fi"
import { GoBriefcase, GoFileCode } from "react-icons/go"
import { PiHandWaving } from "react-icons/pi"
import { RiMoonClearLine } from "react-icons/ri"

function NavigationBar({ isDarkModeActive, setIsDarkModeActive }: { isDarkModeActive: boolean, setIsDarkModeActive: (isActive: boolean) => void }) {
  return (
    <div className="fixed flex bottom-2 justify-center w-full gap-2">
      <div className="flex border rounded-full gap-0 hover:gap-2 transition-all">
        <button>
          <PiHandWaving className="mx-2" />
        </button>
        <button>
          <GoFileCode className="mx-2" />
        </button>
        <button>
          <GoBriefcase className="mx-2" />
        </button>
      </div>
      <div className="flex border rounded-full p-2">
        <button onClick={() => setIsDarkModeActive(!isDarkModeActive)}>
          {isDarkModeActive ? <RiMoonClearLine /> : <FiSun />}
        </button>
      </div>
    </div>
  )
}

export default NavigationBar
