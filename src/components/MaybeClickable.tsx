type MaybeClickableProps = {
  children: React.ReactNode
  condition: boolean,
  onClick: () => void,
}

export default function MaybeClickable(props: MaybeClickableProps) {
  return props.condition ? <a onClick={props.onClick} className="hover:cursor-pointer">{props.children}</a> : props.children
}
