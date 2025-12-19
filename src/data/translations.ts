import type { Translation } from "../models/translation"

export function getTranslation(region: string) {
  switch (region) {
    case "DE":
      return translations.german
    default:
      return translations.english
  }
}

const translations: Record<string, Translation> = {
  english: {
    welcomeSection: {
      title: {
        top: "Hi, I'm Levin!",
        bottom: "Software engineer & musician",
      },
      subtitle: "Focussing on cloud-based backend systems & audio/music systems across platforms",
    },
    projectsSection: {
      title: "Outside of work",
      subtitle: {
        head: "To explore even more projects visit my",
        tail: "profile",
      },
    },
    projectLabels: {
      downloadLabel: "Download",
      sourceCodeLabel: "Source code",
    },
    projects: {
      drumlineTranscriber: {
        title: "Drumline Transcriber",
        description: "Machine learning toolchain that converts drumline audio into symbolic transcriptions",
      },
      jobPostingNotifier: {
        title: "Job Posting Notifier",
        description: "Monitors job listings and publishes real-time notifications to subscribing devices",
      },
      portfolioWebsite: {
        title: "Portfolio Website",
        description: "This very website, highlighting my favorite projects and experience",
      },
      tempus: {
        title: "Tempus",
        description: "Metronome app that delivers a flexible, real-time adjustable beat and subdivision experience",
      },
    },
    experienceSection: {
      title: "My main gigs",
      subtitle: {
        head: "For more details about each of my roles visit my",
        tail: "profile",
      },
    },
    footerSection: {
      builtWithText: "Built with",
      drummerIconText: "Drummer icon by",
    },
  },
  german: {
    welcomeSection: {
      title: {
        top: "Hi, ich bin Levin!",
        bottom: "Softwareingenieur & Musiker",
      },
      subtitle: "Mit Fokus auf cloudbasierte Backend-Systeme und plattformübergreifende Audio-/Musiksysteme",
    },
    projectsSection: {
      title: "Außerhalb der Arbeit",
      subtitle: {
        head: "Um noch mehr meiner Projekte zu entdecken, besuche mein",
        tail: "Profil",
      },
    },
    projectLabels: {
      downloadLabel: "Herunterladen",
      sourceCodeLabel: "Quellcode",
    },
    projects: {
      drumlineTranscriber: {
        title: "Drumline Transcriber",
        description: "Machine-Learning-Toolchain, die Drumline-Audio in symbolische Transkriptionen umwandelt",
      },
      jobPostingNotifier: {
        title: "Job Posting Notifier",
        description: "Überwacht Stellenanzeigen und sendet Echtzeit-Benachrichtigungen an abonnierte Geräte",
      },
      portfolioWebsite: {
        title: "Portfolio-Website",
        description: "Die Website, auf der du dich gerade befindest – sie präsentiert meine Lieblingsprojekte und Erfahrungen",
      },
      tempus: {
        title: "Tempus",
        description: "Metronom-App, die ein flexibles, in Echtzeit anpassbares Schlag- und Unterteilungs-Erlebnis bietet",
      },
    },
    experienceSection: {
      title: "Meine Hauptjobs",
      subtitle: {
        head: "Für mehr Details zu meinen Jobs besuche mein",
        tail: "Profil",
      },
    },
    footerSection: {
      builtWithText: "Erstellt mit",
      drummerIconText: "Schlagzeuger-Symbol von",
    },
  },
}
