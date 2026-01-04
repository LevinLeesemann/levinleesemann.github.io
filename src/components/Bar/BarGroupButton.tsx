import type { IconType } from "react-icons"
import Tooltip, { type TooltipLocation } from "../Tooltip"

type BarGroupButtonProps = {
  icon: IconType
  isActive?: boolean
  label: string
  onClick: () => void
  tooltipLocation: TooltipLocation
}

export default function BarGroupButton({ icon: Icon, isActive, label, onClick, tooltipLocation }: BarGroupButtonProps) {
  return (
    <Tooltip location={tooltipLocation} text={label}>
      <button onClick={onClick} className="group flex flex-row items-center justify-center text-text hover:cursor-pointer p-2.5 sm:p-3 size-10 sm:size-12 hover:p-2 hover:sm:p-2.5 transition-[padding]">
        <Icon className="size-full" />
        {isActive && <div className="absolute bottom-1 sm:bottom-1.5 group-hover:bottom-0.5 sm:group-hover:bottom-1 transition-[bottom] duration-250 size-[3.5px] rounded-full bg-accent" />}
      </button>
    </Tooltip>
  )
}
