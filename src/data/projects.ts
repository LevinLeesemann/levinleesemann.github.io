import type { Project } from "../models/project"

export const projects: Project[] = [
  {
    id: "tempus",
    languages: ["Swift", "C++", "Dart"],
    technologies: ["iOS", "Android", "Flutter"],
    thumbnailUrl: {
      dark: "/src/assets/projects/tempus/dark.png",
      light: "/src/assets/projects/tempus/light.png",
    },
    downloadUrl: "https://apps.apple.com/us/app/tempus-metronome/id6738511466?platform=iphone",
    sourceCodeUrl: "https://github.com/LevinLeesemann/Tempus",
  },
  {
    id: "drumlineTranscriber",
    languages: ["Python"],
    technologies: ["TensorFlow", "Librosa"],
    thumbnailUrl: {
      dark: "/src/assets/projects/drumline-transcriber/dark.png",
      light: "/src/assets/projects/drumline-transcriber/light.png",
    },
    sourceCodeUrl: "https://github.com/LevinLeesemann/drumline-transcriber",
  },
  {
    id: "jobPostingNotifier",
    languages: ["Java"],
    technologies: ["GCP", "Docker", "Terraform", "GHA"],
    thumbnailUrl: {
      dark: "/src/assets/projects/job-posting-notifier/dark.png",
      light: "/src/assets/projects/job-posting-notifier/light.png",
    },
    sourceCodeUrl: "https://github.com/LevinLeesemann/job-posting-notifier",
  },
  {
    id: "portfolioWebsite",
    languages: ["TypeScript"],
    technologies: ["React", "Tailwind", "Vite"],
    thumbnailUrl: {
      dark: "/src/assets/projects/portfolio-website/dark.png",
      light: "/src/assets/projects/portfolio-website/light.png",
    },
    sourceCodeUrl: "https://github.com/LevinLeesemann/portfolio",
  },
]
