import audioEnginePartIThumbnailDark from "../assets/posts/audio-engine-part-i/thumbnail/dark.png"
import audioEnginePartIThumbnailLight from "../assets/posts/audio-engine-part-i/thumbnail/light.png"
import type { Post } from "../models/post"

export const posts: Post[] = [
  {
    id: "audio-engine-part-i",
    title: {
      english: "Audio Engine (Part I)",
      german: "Audio-Engine (Teil I)",
    },
    datePosted: new Date(2025, 0, 20),
    preview: {
      english: "Exploring the design and implementation of the fundamental components of a cross-platform audio engine for iOS, Android, and Web — ranging from technology selection to nitty gritty implementation challenges",
      german: "Erkundung des Designs und der Implementierung der grundlegenden Komponenten einer plattformübergreifenden Audio-Engine für iOS, Android und das Web — von der Technologieauswahl bis hin zu detaillierten Herausforderungen bei der Implementierung.",
    },
    sections: [
      {
        id: "whats-the-problem",
        title: {
          english: "What's the problem?",
          german: "Worum geht es eigentlich?",
        },
        content: [
          {
            english: "When I was offered the chance to build a cross-platform audio engine for Gap Click and Beat Note, the underlying motivation was very practical. For some context, both apps rely on adjustable real-time audio and music features with precise timing. They currently use a similar open-source audio stack, which works reasonably well in isolation, but maintaining and updating their respective components separately has become tedious and prone to bugs over time. Additionally, Gap Click runs on Android and iOS, while Beat Note is currently only supported on iOS, meaning that as more platforms are added, the amount of audio code to maintain continues to grow.",
            german: "Als ich die Möglichkeit bekam, eine plattformübergreifende Audio-Engine für Gap Click und Beat Note zu entwickeln, war die Motivation sehr praktisch. Zur Einordnung: Beide Apps setzen auf anpassbare Echtzeit-Audio- und Musikfunktionen, die präzises Timing erfordern. Derzeit verwenden sie einen ähnlichen Open-Source-Audiostack, der isoliert gut funktioniert, aber die einzelnen Komponenten getrennt zu warten und zu aktualisieren, ist auf Dauer mühsam und fehleranfällig. Außerdem läuft Gap Click auf Android und iOS, während Beat Note bisher nur auf iOS unterstützt wird, was bedeutet, dass mit jeder zusätzlichen Plattform der zu wartende Audio-Code weiter wächst.",
          },
          {
            english: "It made sense to consider a unified solution designed to serve both apps and future projects. Ideally, this engine would provide a consistent interface so that whether on iOS, Android, or web, its interface and behavior would remain consistent. Cross-platform support was not just a nice-to-have; it was essential.",
            german: "Es machte daher Sinn, eine einheitliche Lösung zu entwickeln, die beide Apps und mögliche zukünftige Projekte abdeckt. Idealerweise würde diese Engine eine konsistente Schnittstelle bieten, sodass sie auf iOS, Android oder im Web integriert werden kann und Schnittstelle sowie Verhalten weitgehend identisch bleiben. Plattformübergreifende Unterstützung war dabei nicht nur ein nettes Extra, sie war essentiell.",
          },
          {
            english: "The current open-source stack, along with other available alternatives, either lack the capabilities needed for current and future features, are not maintained actively enough for multiple production apps, or do not offer sufficient testing, documentation, or extensibility. That is when the idea for a custom, shared audio layer started to take shape, one that could be controlled, extended, and relied upon across all apps, without needing to reimplement the same logic on each platform.",
            german: "Der aktuelle Open-Source-Stack und andere verfügbare Alternativen bieten entweder nicht die Funktionen, die für aktuelle und zukünftige Features nötig sind, werden nicht aktiv genug gepflegt, um in mehreren Produktions-Apps zuverlässig eingesetzt zu werden, oder verfügen nicht über ausreichende Tests, Dokumentation oder Erweiterbarkeit. So entstand die Idee einer eigenen, gemeinsamen Audio-Schicht, die sich kontrollieren, erweitern und in allen Apps zuverlässig einsetzen lässt, ohne die gleiche Logik auf jeder Plattform neu implementieren zu müssen.",
          },
        ],
      },
      {
        id: "web-first",
        title: {
          english: "Web first",
          german: "Web zuerst",
        },
        content: [],
      },
      {
        id: "the-core-not-the-movie",
        title: {
          english: "The core (not the movie)",
          german: "Der Innere Kern (nicht der Film)",
        },
        content: [],
      },
      {
        id: "the-inner-workings-of-audio-systems",
        title: {
          english: "The inner workings of audio systems",
          german: "Wie Audiosysteme intern funktionieren",
        },
        content: [],
      },
      {
        id: "ios-integration",
        title: {
          english: "iOS integration",
          german: "iOS-Integration",
        },
        content: [],
      },
      {
        id: "android-integration",
        title: {
          english: "Android integration",
          german: "Android-Integration",
        },
        content: [],
      },
      {
        id: "bringing-it-all-together",
        title: {
          english: "Bringing it all together",
          german: "Die Zusammenführung",
        },
        content: [],
      },
      {
        id: "revisiting-the-web",
        title: {
          english: "Revisiting the web",
          german: "Zurück zum Web",
        },
        content: [],
      },
      {
        id: "automation-and-quality-of-life",
        title: {
          english: "Automation and quality of life",
          german: "Automatisierung und Entwickler-Ergonomie",
        },
        content: [],
      },
      {
        id: "lessons-learned",
        title: {
          english: "Lessons learned",
          german: "Erkenntnisse",
        },
        content: [],
      },
      {
        id: "next-steps",
        title: {
          english: "Next steps",
          german: "Wie es weitergeht",
        },
        content: [],
      },
    ],
    thumbnailUrl: {
      dark: audioEnginePartIThumbnailDark,
      light: audioEnginePartIThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
