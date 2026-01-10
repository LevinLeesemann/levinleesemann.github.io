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
    datePosted: new Date(2025, 0, 13),
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
        content: [],
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
