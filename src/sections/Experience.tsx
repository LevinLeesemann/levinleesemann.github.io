import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"
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
      <SectionTitle onClick={() => window.location.replace("/#experience")}>{props.translation.experienceSection.title}</SectionTitle>
      <SectionSubtitle>{props.translation.experienceSection.subtitle.head} <a className="font-bold" href={urls.linkedIn} target="_blank">LinkedIn</a> {props.translation.experienceSection.subtitle.tail}</SectionSubtitle>
      <div className="flex flex-col">
        {workExperiences.map(workExperience => <WorkExperienceEntry key={`${workExperience.title}${workExperience.employer}${workExperience.type.toString()}${workExperience.specialization?.toString() ?? ""}`} workExperience={workExperience} isFirst={workExperiences.indexOf(workExperience) === 0} isLast={workExperiences.indexOf(workExperience) === workExperiences.length - 1} />)}
      </div>
    </section>
  )
}
