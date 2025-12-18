import type { Project } from "../models/project"

export const projects: Project[] = [
  {
    id: "tempus",
    languages: ["Swift", "C++", "Dart"],
    technologies: ["iOS", "Android", "Flutter"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    downloadUrl: "https://apps.apple.com/us/app/tempus-metronome/id6738511466?platform=iphone",
    sourceCodeUrl: "https://github.com/LevinLeesemann/Tempus",
  },
  {
    id: "drumlineTranscriber",
    languages: ["Python"],
    technologies: ["TensorFlow", "Librosa"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/drumline-transcriber",
  },
  {
    id: "jobPostingNotifier",
    languages: ["Java"],
    technologies: ["GCP", "Docker", "Terraform", "GHA"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/job-posting-notifier",
  },
  {
    id: "portfolioWebsite",
    languages: ["TypeScript"],
    technologies: ["React", "Tailwind", "Vite"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/portfolio",
  },
]
