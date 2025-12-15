type NavigationBarGroupProps = {
  children: React.ReactNode
}

export default function NavigationBarGroup(props: NavigationBarGroupProps) {
  return (
    <div className="flex flew-row gap-2 hover:gap-6 duration-250 transition-[gap] border rounded-full bg-background border-border pointer-events-auto">
      {props.children}
    </div>
  )
}
