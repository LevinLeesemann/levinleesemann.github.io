import type { IconType } from "react-icons"

type FooterButtonProps = {
  icon: IconType
  url: string
}

export default function FooterButton({ icon: Icon, url }: FooterButtonProps) {
  return (
    <a href={url} target="_blank" className="flex flex-row items-center justify-center text-text hover:cursor-pointer size-12 sm:size-14 md:size-16">
      <Icon className="size-full" />
    </a>
  )
}
