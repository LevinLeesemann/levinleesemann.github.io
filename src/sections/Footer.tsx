import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io"
import FooterButton from "../components/FooterButton"
import { translations } from "../data/translations"
import { urls } from "../data/urls"
import type { Language } from "../models/language"

type FooterProps = {
  language: Language
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
          <p>{translations[props.language].footer.builtWith.head} React + Tailwind + Vite{translations[props.language].footer.builtWith.tail ? ` ${translations[props.language].footer.builtWith.tail!}` : ""}</p>
          <a className="self-center" href="https://www.flaticon.com/free-animated-icons/drummer" target="_blank" title="drummer animated icons">{translations[props.language].footer.drummerIconText} Freepik - Flaticon</a>
        </div>
      </div>
    </footer>
  )
}
