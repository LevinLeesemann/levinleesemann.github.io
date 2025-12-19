import { FiExternalLink } from "react-icons/fi"

type SubtitleLinkProps = {
  label: string
  url: string
}

export default function SubtitleLink(props: SubtitleLinkProps) {
  return (
    <a className="font-bold inline-flex items-center gap-1" href={props.url} target="_blank">
      {props.label} <FiExternalLink />
    </a>
  )
}
