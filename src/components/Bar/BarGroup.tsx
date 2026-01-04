type BarGroupProps = {
  children: React.ReactNode
  isVertical?: boolean
}

export default function BarGroup(props: BarGroupProps) {
  return (
    <div className={`flex flex-${props.isVertical ? "col" : "row"} gap-0 hover:gap-2 duration-250 transition-[gap] border rounded-full bg-background border-border pointer-events-auto`}>
      {props.children}
    </div>
  )
}
