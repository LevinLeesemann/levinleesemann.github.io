type NavigationBarGroupProps = {
  children: React.ReactNode
}

export default function NavigationBarGroup(props: NavigationBarGroupProps) {
  return (
    <div className="flex flew-row gap-0 hover:gap-2 duration-250 transition-[gap] border rounded-full bg-background border-border">
      {props.children}
    </div>
  )
}
