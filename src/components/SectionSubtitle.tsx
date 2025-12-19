type SectionSubtitleProps = {
  children: React.ReactNode
  className?: string
}

export default function SectionSubtitle(props: SectionSubtitleProps) {
  return (
    <h2 className={`${props.className ? `${props.className} ` : ""}text-text-muted text-sm sm:text-md md:text-lg lg:text-xl max-w-8/9 sm:max-w-2/3 md:max-w-3/5`}>
      {props.children}
    </h2>
  )
}
