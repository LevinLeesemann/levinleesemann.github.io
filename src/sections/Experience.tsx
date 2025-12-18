import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"
import WorkExperienceEntry from "../components/WorkExperienceEntry"
import { urls } from "../data/urls"
import { workExperiences } from "../data/work-experiences"

export default function Experience() {
  return (
    <section id="experience" className="mb-32">
      <SectionTitle onClick={() => window.location.replace("/#experience")}>Where I've spent most of my time</SectionTitle>
      <SectionSubtitle>For more details about each of my roles visit my <a className="font-bold" href={urls.linkedIn} target="_blank">LinkedIn</a> profile</SectionSubtitle>
      <div className="flex flex-col">
        {workExperiences.map(workExperience => <WorkExperienceEntry key={`${workExperience.title}${workExperience.employer}${workExperience.type.toString()}${workExperience.specialization?.toString() ?? ""}`} workExperience={workExperience} isFirst={workExperiences.indexOf(workExperience) === 0} isLast={workExperiences.indexOf(workExperience) === workExperiences.length - 1} />)}
      </div>
    </section>
  )
}
