type ChipProps = {
  color: "accent" | "text"
  label: string
}

export default function Chip(props: ChipProps) {
  return (
    <p className={`text-${props.color} border ${props.color === "text" ? "" : "bg-accent-muted"} rounded-full px-2`}>{props.label}</p>
  )
}
