import type { Project } from "../models/project"

export const projects: Project[] = [
  {
    title: "Tempus",
    description: "Metronome app that delivers a flexible, real-time adjustable beat and subdivision experience",
    languages: ["Swift", "C++", "Dart"],
    technologies: ["iOS", "Android", "Flutter"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    downloadUrl: "https://apps.apple.com/us/app/tempus-metronome/id6738511466?platform=iphone",
    sourceCodeUrl: "https://github.com/LevinLeesemann/Tempus",
  },
  {
    title: "Drumline Transcriber",
    description: "Machine learning toolchain that converts drumline audio into symbolic transcriptions",
    languages: ["Python"],
    technologies: ["TensorFlow", "Librosa"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/drumline-transcriber",
  },
  {
    title: "Job Posting Notifier",
    description: "Monitors job listings and publishes real-time notifications to subscribing devices",
    languages: ["Java"],
    technologies: ["GCP", "Docker", "Terraform", "GHA"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/job-posting-notifier",
  },
  {
    title: "Portfolio Website",
    description: "This very website, highlighting my favorite projects and experience",
    languages: ["TypeScript"],
    technologies: ["React", "Tailwind", "Vite"],
    thumbnailUrl: "https://raw.githubusercontent.com/LevinLeesemann/Tempus/refs/heads/main/assets/logos/default.png",
    sourceCodeUrl: "https://github.com/LevinLeesemann/portfolio",
  },
]
