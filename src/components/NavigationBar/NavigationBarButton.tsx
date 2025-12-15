import type { IconType } from "react-icons"

type NavigationBarButtonProps = {
  icon: IconType
  isActive?: boolean
  onClick: () => void
}

export default function NavigationBarButton({ icon: Icon, isActive, onClick }: NavigationBarButtonProps) {
  return (
    <button onClick={onClick} className="flex items-center justify-center text-text hover:cursor-pointer p-2.5 sm:p-3 md:p-3.5 size-10 sm:size-12 md:size-14">
      <Icon className="size-full" />
      {isActive && <div className="absolute bottom-1.25 sm:bottom-1.75 size-[3.5px] rounded-full bg-accent" />}
    </button>
  )
}
