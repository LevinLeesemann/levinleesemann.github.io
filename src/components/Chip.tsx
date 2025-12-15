type ChipProps = {
  label: string
}

export default function Chip(props: ChipProps) {
  return (
    <p className="text-accent">{props.label}</p>
  )
}
