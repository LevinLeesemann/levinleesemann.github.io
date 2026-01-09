import { GoHome } from "react-icons/go"
import { useNavigate } from "react-router-dom"
import Tooltip from "./Tooltip"
import { translations } from "../data/translations"
import type { Language } from "../models/language"

type HomeButtonProps = {
  language: Language
}

export default function HomeButton(props: HomeButtonProps) {
  const navigate = useNavigate()

  return (
    <div className="fixed inset-x-0 top-4 left-4 z-20 pointer-events-none">
      <div className="mx-auto max-w-5xl relative">
        <Tooltip location={"right"} text={translations[props.language].post.home}>
          <button onClick={() => void navigate("/")} className="border rounded-full bg-background border-border flex items-center justify-center text-text hover:cursor-pointer p-2.5 sm:p-3 size-10 sm:size-12 hover:p-2 hover:sm:p-2.5 transition-[padding] pointer-events-auto">
            <GoHome className="size-full" />
          </button>
        </Tooltip>
      </div>
    </div>
  )
}
