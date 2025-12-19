import { FiExternalLink } from "react-icons/fi"

type ProjectCardLinkProps = {
  label: string
  link: string
}

export default function ProjectCardLink(props: ProjectCardLinkProps) {
  return (
    <a className="text-sm text-text group inline-flex flex-col items-start gap-0.5" href={props.link} target="_blank">
      <span className="flex flex-row items-center gap-1 group-hover:gap-2 transition-[gap,padding] duration-250 hover:pr-1">
        {props.label}
        <FiExternalLink />
      </span>
      <span className="h-px w-0 bg-accent transition-[width] duration-250 group-hover:w-full"></span>
    </a>
  )
}
