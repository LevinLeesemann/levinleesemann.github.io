import { useState } from "react"
import type { ThumbnailUrl } from "../../models/thumbnail-url"

type CardThumbnailProps = {
  isDarkModeActive: boolean
  thumbnail: ThumbnailUrl
}

export default function CardThumbnail(props: CardThumbnailProps) {
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false)

  return (
    <>
      {!isThumbnailLoaded &&
        <div className="flex items-center justify-center w-full aspect-2/1">
          <div className="size-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        </div>
      }
      <img src={props.isDarkModeActive ? props.thumbnail.dark : props.thumbnail.light} className={`${isThumbnailLoaded ? "" : "hidden"} border-0 rounded-lg w-max aspect-2/1 object-cover hover:scale-105 transition-[scale] duration-250`} onLoad={() => setIsThumbnailLoaded(true)} />
    </>
  )
}
