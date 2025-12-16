import { GoLink } from "react-icons/go"

type ProjectCardLinkProps = {
  label: string
  link: string
}

export default function ProjectCardLink(props: ProjectCardLinkProps) {
  return (
    <a className="flex flex-row items-center gap-2 text-sm" href={props.link} target="_blank">
      <p className="text-text">{props.label}</p>
      <GoLink className="text-text" />
    </a>
  )
}
