import type { IconType } from "react-icons"

type NavigationBarButtonProps = {
  icon: IconType
  onClick: () => void
}

export default function NavigationBarButton({ icon: Icon, onClick }: NavigationBarButtonProps) {
  return (
    <button onClick={onClick} className="p-2 text-text hover:cursor-pointer">
      <Icon className="h-4 w-4" />
    </button>
  )
}
