import Subtitle from "../components/Subtitle"
import SubtitleLink from "../components/SubtitleLink"
import TimelineEntry from "../components/Timeline/TimelineEntry"
import TimelineText from "../components/Timeline/TimelineText"
import Title from "../components/Title"
import { urls } from "../data/urls"
import { workExperiences } from "../data/work-experiences"
import type { Translation } from "../models/translation"

type ExperienceProps = {
  translation: Translation
}

export default function Experience(props: ExperienceProps) {
  const activeWorkExperiences = [workExperiences.filter(workExperience => workExperience.isActive)]
  const inactiveWorkExperiences = workExperiences.filter(workExperience => !workExperience.isActive).map(workExperience => [workExperience])
  const groupedWorkExperiences = activeWorkExperiences.concat(inactiveWorkExperiences)

  return (
    <section id="experience" className="flex flex-col gap-8">
      <Title className="hover:cursor-pointer" onClick={() => window.location.replace("/#experience")}>{props.translation.experienceSection.title}</Title>
      <Subtitle>
        {props.translation.experienceSection.subtitle.head} <SubtitleLink label="LinkedIn" url={urls.linkedIn} /> {props.translation.experienceSection.subtitle.tail}
      </Subtitle>
      <div className="flex flex-col">
        <TimelineText text={props.translation.experienceSection.timelineStart} />
        {groupedWorkExperiences.map(workExperiences => <TimelineEntry key={workExperiences.at(0)!.id} isFirst={groupedWorkExperiences.indexOf(workExperiences) === 0} isLast={groupedWorkExperiences.indexOf(workExperiences) === groupedWorkExperiences.length - 1} translation={props.translation} workExperiences={workExperiences} />)}
        <TimelineText text={props.translation.experienceSection.timelineEnd} />
      </div>
    </section>
  )
}
