type ChipProps = {
  className: string
  label: string
}

export default function Chip(props: ChipProps) {
  return (
    <p className={`border rounded-full px-2 ${props.className}`}>{props.label}</p>
  )
}
