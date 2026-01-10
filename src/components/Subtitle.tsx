type SubtitleProps = {
  children: React.ReactNode
  className?: string
  isUnmuted?: boolean
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <h2 className={`${props.className ? `${props.className} ` : ""}${props.isUnmuted ? "text-text" : "text-text-muted"} text-sm sm:text-md md:text-lg lg:text-xl max-w-8/9 sm:max-w-2/3 md:max-w-3/5`}>
      {props.children}
    </h2>
  )
}
