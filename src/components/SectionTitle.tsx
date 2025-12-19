import MaybeClickable from "./MaybeClickable"

type SectionTitleProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <MaybeClickable condition={!!props.onClick} onClick={props.onClick ?? (() => console.error("Shouldn't happen"))}>
      <h1 className={`${props.className ? `${props.className} ` : ""}inline-block font-bold text-text text-3xl sm:text-4xl md:text-5xl`}>
        {props.children}
      </h1>
    </MaybeClickable>
  )
}
