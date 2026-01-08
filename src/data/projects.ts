import drumlineTranscriberDark from "../assets/projects/drumline-transcriber/dark.png"
import drumlineTranscriberLight from "../assets/projects/drumline-transcriber/light.png"
import jobPostingNotifierDark from "../assets/projects/job-posting-notifier/dark.png"
import jobPostingNotifierLight from "../assets/projects/job-posting-notifier/light.png"
import portfolioWebsiteDark from "../assets/projects/portfolio-website/dark.png"
import portfolioWebsiteLight from "../assets/projects/portfolio-website/light.png"
import tempusThumbnailDark from "../assets/projects/tempus/dark.png"
import tempusThumbnailLight from "../assets/projects/tempus/light.png"
import type { Project, ProjectResourceLabel } from "../models/project"

export const projects: Project[] = [
  {
    id: "tempus",
    title: {
      english: "Tempus",
      german: "Tempus",
    },
    description: {
      english: "Metronome app that delivers a flexible, real-time adjustable beat and subdivision experience",
      german: "Metronom-App, die ein flexibles, in Echtzeit anpassbares Schlag- und Unterteilungs-Erlebnis bietet",
    },
    languages: ["Swift", "C++", "Dart"],
    resources: [
      {
        labelId: "download",
        url: "https://apps.apple.com/us/app/tempus-metronome/id6738511466?platform=iphone",
      },
      {
        labelId: "source-code",
        url: "https://github.com/LevinLeesemann/Tempus",
      },
    ],
    technologies: ["iOS", "Android", "Flutter"],
    thumbnailUrl: {
      dark: tempusThumbnailDark,
      light: tempusThumbnailLight,
    },
  },
  {
    id: "drumline-transcriber",
    title: {
      english: "Drumline Transcriber",
      german: "Drumline Transcriber",
    },
    description: {
      english: "Machine learning toolchain that converts drumline audio into symbolic transcriptions",
      german: "Machine-Learning-Toolchain, die Drumline-Audio in symbolische Transkriptionen umwandelt",
    },
    languages: ["Python"],
    resources: [
      {
        labelId: "source-code",
        url: "https://github.com/LevinLeesemann/drumline-transcriber",
      },
      {
        labelId: "article",
        url: "https://cs.uiowa.edu/news/2022/06/automated-drumline-recognition",
      },
      {
        labelId: "research-paper",
        url: "https://cs.uiowa.edu/sites/cs.uiowa.edu/files/2022-06/Research%20Paper.pdf",
      },
    ],
    technologies: ["TensorFlow", "Librosa"],
    thumbnailUrl: {
      dark: drumlineTranscriberDark,
      light: drumlineTranscriberLight,
    },
  },
  {
    id: "job-posting-notifier",
    title: {
      english: "Job Posting Notifier",
      german: "Job Posting Notifier",
    },
    description: {
      english: "Monitors job listings and publishes real-time notifications to subscribing devices",
      german: "Überwacht Stellenanzeigen und sendet Echtzeit-Benachrichtigungen an abonnierte Geräte",
    },
    languages: ["Java"],
    resources: [
      {
        labelId: "source-code",
        url: "https://github.com/LevinLeesemann/job-posting-notifier",
      },
    ],
    technologies: ["GCP", "Spring Boot", "Docker", "Terraform", "GitHub Actions"],
    thumbnailUrl: {
      dark: jobPostingNotifierDark,
      light: jobPostingNotifierLight,
    },
  },
  {
    id: "portfolio-website",
    title: {
      english: "Portfolio Website",
      german: "Portfolio-Website",
    },
    description: {
      english: "This very website, highlighting my favorite projects and experience",
      german: "Die Website, auf der du dich gerade befindest – sie präsentiert meine Lieblingsprojekte und Erfahrungen",
    },
    languages: ["TypeScript"],
    resources: [
      {
        labelId: "source-code",
        url: "https://github.com/LevinLeesemann/portfolio",
      },
    ],
    technologies: ["React", "Tailwind", "Vite"],
    thumbnailUrl: {
      dark: portfolioWebsiteDark,
      light: portfolioWebsiteLight,
    },
  },
]

export const projectResourceLabels: ProjectResourceLabel = {
  article: {
    english: "Article",
    german: "Artikel",
  },
  download: {
    english: "Download",
    german: "Herunterladen",
  },
  "research-paper": {
    english: "Research paper",
    german: "Wissenschaftliche Arbeit",
  },
  "source-code": {
    english: "Source code",
    german: "Quellcode",
  },
}
