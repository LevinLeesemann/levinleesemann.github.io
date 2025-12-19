import type { Project } from "../models/project"

export const projects: Project[] = [
  {
    id: "tempus",
    languages: ["Swift", "C++", "Dart"],
    resources: [
      {
        labelId: "download",
        url: "https://apps.apple.com/us/app/tempus-metronome/id6738511466?platform=iphone",
      },
      {
        labelId: "sourceCode",
        url: "https://github.com/LevinLeesemann/Tempus",
      },
    ],
    technologies: ["iOS", "Android", "Flutter"],
    thumbnailUrl: {
      dark: "/src/assets/projects/tempus/dark.png",
      light: "/src/assets/projects/tempus/light.png",
    },
  },
  {
    id: "drumlineTranscriber",
    languages: ["Python"],
    resources: [
      {
        labelId: "sourceCode",
        url: "https://github.com/LevinLeesemann/drumline-transcriber",
      },
      {
        labelId: "article",
        url: "https://cs.uiowa.edu/news/2022/06/automated-drumline-recognition",
      },
      {
        labelId: "researchPaper",
        url: "https://cs.uiowa.edu/sites/cs.uiowa.edu/files/2022-06/Research%20Paper.pdf",
      },
    ],
    technologies: ["TensorFlow", "Librosa"],
    thumbnailUrl: {
      dark: "/src/assets/projects/drumline-transcriber/dark.png",
      light: "/src/assets/projects/drumline-transcriber/light.png",
    },
  },
  {
    id: "jobPostingNotifier",
    languages: ["Java"],
    resources: [
      {
        labelId: "sourceCode",
        url: "https://github.com/LevinLeesemann/job-posting-notifier",
      },
    ],
    technologies: ["GCP", "Docker", "Terraform", "GHA"],
    thumbnailUrl: {
      dark: "/src/assets/projects/job-posting-notifier/dark.png",
      light: "/src/assets/projects/job-posting-notifier/light.png",
    },
  },
  {
    id: "portfolioWebsite",
    languages: ["TypeScript"],
    resources: [
      {
        labelId: "sourceCode",
        url: "https://github.com/LevinLeesemann/portfolio",
      },
    ],
    technologies: ["React", "Tailwind", "Vite"],
    thumbnailUrl: {
      dark: "/src/assets/projects/portfolio-website/dark.png",
      light: "/src/assets/projects/portfolio-website/light.png",
    },
  },
]
