type SectionTitleProps = {
  children: React.ReactNode
}

export default function SectionTitle(props: SectionTitleProps) {
  return (
    <h1 className="font-bold mt-32 mb-8 text-text text-3xl sm:text-4xl md:text-5xl">{props.children}</h1>
  )
}
