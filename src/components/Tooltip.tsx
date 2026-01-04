export type TooltipLocation = "top" | "bottom" | "left" | "right"

type TooltipProps = {
  children: React.ReactNode
  location?: TooltipLocation
  margin?: string
  text: string
}

const locationClasses: Record<TooltipLocation, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
}

export default function Tooltip(props: TooltipProps) {
  const baseLocation = locationClasses[props.location ?? "bottom"]

  const spacingOverride =
    props.margin != null
      ? baseLocation.replace(/\b(m[trbl]-\d+)\b/g, "").concat(` ${props.margin}`)
      : baseLocation

  return (
    <div className="relative group inline-block">
      {props.children}
      <div className={`absolute hidden group-hover:block border border-border bg-background text-text text-xs py-1 px-2 rounded-full whitespace-nowrap ${spacingOverride}`}>
        {props.text}
      </div>
    </div>
  )
}
