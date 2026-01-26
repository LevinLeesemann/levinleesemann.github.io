import audioEnginePartIAndroidIntegrationEnglish from "../assets/posts/audio-engine-part-i/android-integration/english.md?raw"
import audioEnginePartIAndroidIntegrationGerman from "../assets/posts/audio-engine-part-i/android-integration/german.md?raw"
import audioEnginePartIAutomationAndQualityOfLifeEnglish from "../assets/posts/audio-engine-part-i/automation-and-quality-of-life/english.md?raw"
import audioEnginePartIAutomationAndQualityOfLifeGerman from "../assets/posts/audio-engine-part-i/automation-and-quality-of-life/german.md?raw"
import audioEnginePartIBringingItAllTogetherEnglish from "../assets/posts/audio-engine-part-i/bringing-it-all-together/english.md?raw"
import audioEnginePartIBringingItAllTogetherGerman from "../assets/posts/audio-engine-part-i/bringing-it-all-together/german.md?raw"
import audioEnginePartICleaningUpAfterYourselfEnglish from "../assets/posts/audio-engine-part-i/cleaning-up-after-yourself/english.md?raw"
import audioEnginePartICleaningUpAfterYourselfGerman from "../assets/posts/audio-engine-part-i/cleaning-up-after-yourself/german.md?raw"
import audioEnginePartIIosIntegrationEnglish from "../assets/posts/audio-engine-part-i/ios-integration/english.md?raw"
import audioEnginePartIIosIntegrationGerman from "../assets/posts/audio-engine-part-i/ios-integration/german.md?raw"
import audioEnginePartILessonsLearnedEnglish from "../assets/posts/audio-engine-part-i/lessons-learned/english.md?raw"
import audioEnginePartILessonsLearnedGerman from "../assets/posts/audio-engine-part-i/lessons-learned/german.md?raw"
import audioEnginePartINextStepsEnglish from "../assets/posts/audio-engine-part-i/next-steps/english.md?raw"
import audioEnginePartINextStepsGerman from "../assets/posts/audio-engine-part-i/next-steps/german.md?raw"
import audioEnginePartITheCoreNotTheMovieEnglish from "../assets/posts/audio-engine-part-i/the-core-not-the-movie/english.md?raw"
import audioEnginePartITheCoreNotTheMovieGerman from "../assets/posts/audio-engine-part-i/the-core-not-the-movie/german.md?raw"
import audioEnginePartITheIdeaEnglish from "../assets/posts/audio-engine-part-i/the-idea/english.md?raw"
import audioEnginePartITheIdeaGerman from "../assets/posts/audio-engine-part-i/the-idea/german.md?raw"
import audioEnginePartITheInnerWorkingsOFAudioSystemsEnglish from "../assets/posts/audio-engine-part-i/the-inner-workings-of-audio-systems/english.md?raw"
import audioEnginePartITheInnerWorkingsOFAudioSystemsGerman from "../assets/posts/audio-engine-part-i/the-inner-workings-of-audio-systems/german.md?raw"
import audioEnginePartIThumbnailDark from "../assets/posts/audio-engine-part-i/thumbnail/dark.png"
import audioEnginePartIThumbnailLight from "../assets/posts/audio-engine-part-i/thumbnail/light.png"
import audioEnginePartIWebFirstEnglish from "../assets/posts/audio-engine-part-i/web-first/english.md?raw"
import audioEnginePartIWebFirstGerman from "../assets/posts/audio-engine-part-i/web-first/german.md?raw"
import audioEnginePartIWhatsTheProblemEnglish from "../assets/posts/audio-engine-part-i/whats-the-problem/english.md?raw"
import audioEnginePartIWhatsTheProblemGerman from "../assets/posts/audio-engine-part-i/whats-the-problem/german.md?raw"
import type { Post } from "../models/post"

export const posts: Post[] = [
  {
    id: "audio-engine-part-i",
    title: {
      english: "Audio Engine — Part I",
      german: "Audio-Engine — Teil I",
    },
    datePosted: new Date(2025, 0, 27),
    preview: {
      english: "Exploring the design and implementation of the fundamental components of a cross-platform audio engine for iOS, Android, and web — ranging from technology selection to nitty-gritty implementation challenges",
      german: "Erkundung des Designs und der Implementierung der grundlegenden Komponenten einer plattformübergreifenden Audio-Engine für iOS, Android und das Web — von der Technologieauswahl bis hin zu detaillierten Herausforderungen bei der Implementierung.",
    },
    sections: [
      {
        id: "whats-the-problem",
        title: {
          english: "What's the problem?",
          german: "Worum geht es eigentlich?",
        },
        content: {
          english: audioEnginePartIWhatsTheProblemEnglish,
          german: audioEnginePartIWhatsTheProblemGerman,
        },
      },
      {
        id: "the-idea",
        title: {
          english: "The idea",
          german: "Die Idee",
        },
        content: {
          english: audioEnginePartITheIdeaEnglish,
          german: audioEnginePartITheIdeaGerman,
        },
      },
      {
        id: "the-inner-workings-of-audio-systems",
        title: {
          english: "The inner workings of audio systems",
          german: "Wie Audiosysteme intern funktionieren",
        },
        content: {
          english: audioEnginePartITheInnerWorkingsOFAudioSystemsEnglish,
          german: audioEnginePartITheInnerWorkingsOFAudioSystemsGerman,
        },
      },
      {
        id: "the-core-not-the-movie",
        title: {
          english: "The core (not the movie)",
          german: "Der Innere Kern (nicht der Film)",
        },
        content: {
          english: audioEnginePartITheCoreNotTheMovieEnglish,
          german: audioEnginePartITheCoreNotTheMovieGerman,
        },
      },
      {
        id: "web-first",
        title: {
          english: "Web first",
          german: "Web zuerst",
        },
        content: {
          english: audioEnginePartIWebFirstEnglish,
          german: audioEnginePartIWebFirstGerman,
        },
      },
      {
        id: "ios-integration",
        title: {
          english: "iOS integration",
          german: "iOS-Integration",
        },
        content: {
          english: audioEnginePartIIosIntegrationEnglish,
          german: audioEnginePartIIosIntegrationGerman,
        },
      },
      {
        id: "android-integration",
        title: {
          english: "Android integration",
          german: "Android-Integration",
        },
        content: {
          english: audioEnginePartIAndroidIntegrationEnglish,
          german: audioEnginePartIAndroidIntegrationGerman,
        },
      },
      {
        id: "bringing-it-all-together",
        title: {
          english: "Bringing it all together",
          german: "Die Zusammenführung",
        },
        content: {
          english: audioEnginePartIBringingItAllTogetherEnglish,
          german: audioEnginePartIBringingItAllTogetherGerman,
        },
      },
      {
        id: "cleaning-up-after-yourself",
        title: {
          english: "Cleaning up after yourself",
          german: "",
        },
        content: {
          english: audioEnginePartICleaningUpAfterYourselfEnglish,
          german: audioEnginePartICleaningUpAfterYourselfGerman,
        },
      },
      {
        id: "automation-and-quality-of-life",
        title: {
          english: "Automation and quality of life",
          german: "Automatisierung und Entwickler-Ergonomie",
        },
        content: {
          english: audioEnginePartIAutomationAndQualityOfLifeEnglish,
          german: audioEnginePartIAutomationAndQualityOfLifeGerman,
        },
      },
      {
        id: "lessons-learned",
        title: {
          english: "Lessons learned",
          german: "Erkenntnisse",
        },
        content: {
          english: audioEnginePartILessonsLearnedEnglish,
          german: audioEnginePartILessonsLearnedGerman,
        },
      },
      {
        id: "next-steps",
        title: {
          english: "Next steps",
          german: "Wie es weitergeht",
        },
        content: {
          english: audioEnginePartINextStepsEnglish,
          german: audioEnginePartINextStepsGerman,
        },
      },
    ],
    thumbnailUrl: {
      dark: audioEnginePartIThumbnailDark,
      light: audioEnginePartIThumbnailLight,
    },
  },
].sort((a, b) => b.datePosted.getTime() - a.datePosted.getTime())
