import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import FooterButton from "../components/FooterButton"
import type { Translation } from "../models/translation"
import { urls } from "../data/urls"

type FooterProps = {
  translation: Translation
}

export default function Footer(props: FooterProps) {
  return (
    <footer className="relative w-full mt-16">
      <div className="bg-section-break h-px w-full" />
      <div className="my-8 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-text text-md sm:text-lg md:text-1xl">
          Levin Leesemann
        </h1>
        <div className="flex flex-row justify-center gap-8">
          <FooterButton icon={IoLogoGithub} url={urls.github} />
          <FooterButton icon={IoLogoLinkedin} url={urls.linkedIn} />
        </div>
        <div className="flex flex-col gap-2 text-text-muted text-xs sm:text-sm md:text-md text-center">
          <p>{props.translation.footerSection.builtWithText} React + Tailwind + Vite</p>
          <a href="https://www.flaticon.com/free-animated-icons/drummer" target="_blank" title="drummer animated icons">{props.translation.footerSection.drummerIconText} Freepik - Flaticon</a>
        </div>
      </div>
    </footer>
  )
}
