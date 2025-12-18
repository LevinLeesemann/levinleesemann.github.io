import SectionSubtitle from "../components/SectionSubtitle"
import SectionTitle from "../components/SectionTitle"

export default function Welcome() {
  return (
    <section id="welcome" className="flex flex-col min-h-screen justify-center">
      <SectionTitle>
        Hi, I'm Levin!<br />
        A software engineer & musician
      </SectionTitle>
      <SectionSubtitle>Focussing on cloud-based backend systems & audio/music systems across platforms</SectionSubtitle>
    </section>
  )
}
