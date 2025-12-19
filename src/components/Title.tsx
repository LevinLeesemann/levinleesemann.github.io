type TitleProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function Title(props: TitleProps) {
  return (
    <a onClick={props.onClick} className={`${props.className ? `${props.className} ` : ""}w-fit font-bold text-text text-3xl sm:text-4xl md:text-5xl`}>
      {props.children}
    </a>
  )
}
