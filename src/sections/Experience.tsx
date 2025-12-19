import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import Title from "../components/Title"
import WorkExperienceEntry from "../components/WorkExperienceEntry"
import { urls } from "../data/urls"
import { workExperiences } from "../data/work-experiences"
import type { Translation } from "../models/translation"

type ExperienceProps = {
  translation: Translation
}

export default function Experience(props: ExperienceProps) {
  return (
    <section id="experience" className="flex flex-col gap-8">
      <Title onClick={() => window.location.replace("/#experience")}>{props.translation.experienceSection.title}</Title>
      <Subtitle>
        {props.translation.experienceSection.subtitle.head} <SubtitleLink label="LinkedIn" url={urls.linkedIn} /> {props.translation.experienceSection.subtitle.tail}
      </Subtitle>
      <div className="flex flex-col">
        {workExperiences.map(workExperience => <WorkExperienceEntry key={workExperience.id} isFirst={workExperiences.indexOf(workExperience) === 0} isLast={workExperiences.indexOf(workExperience) === workExperiences.length - 1} translation={props.translation} workExperience={workExperience} />)}
      </div>
    </section>
  )
}
