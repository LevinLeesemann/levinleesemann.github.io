import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"
import type { Translation } from "../models/translation"

type WelcomeProps = {
  translation: Translation
}

export default function Welcome(props: WelcomeProps) {
  return (
    <section id="welcome" className="flex flex-col min-h-dvh justify-center">
      <SectionTitle>
        {props.translation.welcomeSection.title.top}<br />
        {props.translation.welcomeSection.title.bottom}
      </SectionTitle>
      <SectionSubtitle>{props.translation.welcomeSection.subtitle}</SectionSubtitle>
    </section>
  )
}
