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
    description: {
      english: "Exploring the design and implementation of the fundamental components of a cross-platform audio engine for iOS, Android, and Web — ranging from technology selection to nitty gritty implementation challenges",
      german: "Erkundung des Designs und der Implementierung der grundlegenden Komponenten einer plattformübergreifenden Audio-Engine für iOS, Android und das Web — von der Technologieauswahl bis hin zu detaillierten Herausforderungen bei der Implementierung.",
    },
    sections: [],
    thumbnailUrl: {
      dark: audioEnginePartIThumbnailDark,
      light: audioEnginePartIThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
