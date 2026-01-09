import { FiExternalLink } from "react-icons/fi"
import { GoArrowRight } from "react-icons/go"
import { useNavigate } from "react-router-dom"

type CardLinkProps = {
  isExternal: boolean
  label: string
  url: string
}

export default function CardLink(props: CardLinkProps) {
  const navigate = useNavigate()

  const parentClassName = "text-sm text-text group inline-flex flex-col items-start gap-0.5"
  const link =
    <>
      <span className="flex flex-row items-center gap-1 group-hover:gap-2 transition-[gap,padding] duration-250 hover:pr-1">
        {props.label}
        {props.isExternal ? <FiExternalLink /> : <GoArrowRight />}
      </span>
      <span className="h-px w-0 bg-accent transition-[width] duration-250 group-hover:w-full"></span>
    </>

  return (
    props.isExternal ?
      <a className={parentClassName} href={props.url} target="_blank">
        {link}
      </a> :
      <button onClick={() => void navigate(props.url)} className={`${parentClassName} hover:cursor-pointer`}>
        {link}
      </button>
  )
}
