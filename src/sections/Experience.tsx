import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import TimelineEntry from "../components/Timeline/TimelineEntry"
import TimelineText from "../components/Timeline/TimelineText"
import Title from "../components/Title"
import { translations } from "../data/translations"
import { urls } from "../data/urls"
import { workExperiences } from "../data/work-experiences"
import type { Language } from "../models/language"

type ExperienceProps = {
  language: Language
}

export default function Experience(props: ExperienceProps) {
  const activeWorkExperiences = [workExperiences.filter(workExperience => workExperience.isActive)]
  const inactiveWorkExperiences = workExperiences.filter(workExperience => !workExperience.isActive).map(workExperience => [workExperience])
  const groupedWorkExperiences = activeWorkExperiences.concat(inactiveWorkExperiences)

  return (
    <section id="experience" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#experience")}>{translations[props.language].section.experience.title}</Title>
      <Subtitle>
        {translations[props.language].section.experience.subtitle.head} <SubtitleLink label="LinkedIn" url={urls.linkedIn} /> {translations[props.language].section.experience.subtitle.tail}
      </Subtitle>
      <div className="flex flex-col">
        <TimelineText text={translations[props.language].section.experience.timelineStart} />
        {groupedWorkExperiences.map(workExperiences => <TimelineEntry key={workExperiences.at(0)!.id} isFirst={groupedWorkExperiences.indexOf(workExperiences) === 0} isLast={groupedWorkExperiences.indexOf(workExperiences) === groupedWorkExperiences.length - 1} language={props.language} workExperiences={workExperiences} />)}
        <TimelineText text={translations[props.language].section.experience.timelineEnd} />
      </div>
    </section>
  )
}
