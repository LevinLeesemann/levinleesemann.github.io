import { useNavigate } from "react-router-dom"
import type { ThumbnailUrl } from "../../models/thumbnail-url"
import Chip from "../Chip"
import CardLink from "./CardLink"
import CardThumbnail from "./CardThumbnail"

type Link = {
  isExternal: boolean
  label: string
  url: string
}

type CardProps = {
  accentChipLabels?: string[]
  chipLabels?: string[]
  description: string
  isDarkModeActive: boolean
  links: Link[]
  thumbnail: ThumbnailUrl
  title: string
}

export default function Card(props: CardProps) {
  const navigate = useNavigate()

  const thumbnail = <CardThumbnail isDarkModeActive={props.isDarkModeActive} thumbnail={props.thumbnail}></CardThumbnail>

  return (
    <article className="flex flex-col gap-6">
      <h1 className="text-text md:text-lg">
        {props.title}
      </h1>
      {props.links.at(0)?.isExternal ?
        <a href={props.links.at(0)?.url} target={props.links.at(0)?.isExternal ? "_blank" : "_self"}>
          {thumbnail}
        </a> :
        <button className="hover:cursor-pointer" onClick={() => void navigate(props.links.at(0)!.url)}>
          {thumbnail}
        </button>
      }
      <div className="flex flex-col gap-2">
        {
          props.chipLabels &&
          <div className="flex flex-row flex-wrap gap-2 text-sm">
            {props.chipLabels.map(label => <Chip key={label} className="text-text" label={label} />)}
          </div>
        }
        {
          props.accentChipLabels &&
          <div className="flex flex-row flex-wrap gap-2 text-sm">
            {props.accentChipLabels.map(label => <Chip key={label} className="text-accent bg-accent-muted" label={label} />)}
          </div>
        }
      </div>
      <p className="text-text-muted">
        {props.description}
      </p>
      <div className="flex flex-row flex-wrap gap-2 mt-auto">
        {props.links.map(link => <CardLink key={link.label} isExternal={link.isExternal} label={link.label} url={link.url} />)}
      </div>
    </article>
  )
}
