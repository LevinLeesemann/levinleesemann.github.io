type ChipProps = {
  label: string
}

export default function Chip(props: ChipProps) {
  return (
    <p className="text-accent border bg-accent-muted rounded-full px-2">{props.label}</p>
  )
}
