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
    navigationBar: {
      buttonLabel: {
        lightDarkMode: "Light/Dark Mode",
        welcome: "Welcome",
        projects: "Projects",
        experience: "Experience",
        language: "Language",
      },
      handleLabel: {
        collapse: "Collapse Navigation",
        expand: "Expand Navigation",
      },
    },
    welcomeSection: {
      title: {
        top: "Hi, I'm Levin!",
        bottom: "Software Engineer & Musician",
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
    project: {
      resourceLabel: {
        article: "Article",
        download: "Download",
        researchPaper: "Research paper",
        sourceCode: "Source code",
      },
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
    experience: {
      specializationLabel: {
        backend: "Backend",
        frontend: "Frontend",
        fullstack: "Fullstack",
        systems: "Systems",
      },
      typeLabel: {
        fullTime: "Full-time",
        partTime: "Part-time",
        contract: "Contract",
        internship: "Internship",
      },
    },
    experiences: {
      seniorSoftwareEngineer: {
        title: "Senior Software Engineer",
        employer: "John Deere",
      },
      softwareEngineer: {
        title: "Software Engineer",
        employer: "Kick Snare Hat Apps",
      },
      softwareEngineerII: {
        title: "Software Engineer II",
        employer: "John Deere",
      },
      softwareEngineerI: {
        title: "Software Engineer I",
        employer: "John Deere",
      },
      graduateTeachingAssistant: {
        title: "Graduate Teaching Assistant",
        employer: "University of Iowa",
      },
      softwareEngineeringInternBackend: {
        title: "Software Engineering Intern",
        employer: "John Deere",
      },
      softwareEngineeringInternFrontend: {
        title: "Software Engineering Intern",
        employer: "John Deere",
      },
      softwareDevelopmentIntern: {
        title: "Software Development Intern",
        employer: "University of Iowa",
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
      builtWithText: {
        head: "Built from scratch with",
      },
      drummerIconText: "Drummer icon by",
    },
  },
  german: {
    navigationBar: {
      buttonLabel: {
        lightDarkMode: "Hell/Dunkel Modus",
        welcome: "Willkommen",
        projects: "Projekte",
        experience: "Erfahrung",
        language: "Sprache",
      },
      handleLabel: {
        collapse: "Navigation einklappen",
        expand: "Navigation ausklappen",
      },
    },
    welcomeSection: {
      title: {
        top: "Hi, ich bin Levin!",
        bottom: "Software Engineer & Musiker",
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
    project: {
      resourceLabel: {
        article: "Artikel",
        download: "Herunterladen",
        researchPaper: "Wissenschaftliche Arbeit",
        sourceCode: "Quellcode",
      },
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
    experience: {
      specializationLabel: {
        backend: "Backend",
        frontend: "Frontend",
        fullstack: "Fullstack",
        systems: "Systeme",
      },
      typeLabel: {
        fullTime: "Vollzeit",
        partTime: "Teilzeit",
        contract: "Vertrag",
        internship: "Praktikum",
      },
    },
    experiences: {
      seniorSoftwareEngineer: {
        title: "Senior Software Engineer",
        employer: "John Deere",
      },
      softwareEngineer: {
        title: "Software Engineer",
        employer: "Kick Snare Hat Apps",
      },
      softwareEngineerII: {
        title: "Software Engineer II",
        employer: "John Deere",
      },
      softwareEngineerI: {
        title: "Software Engineer I",
        employer: "John Deere",
      },
      graduateTeachingAssistant: {
        title: "Wissenschaftliche Hilfskraft",
        employer: "Universität von Iowa",
      },
      softwareEngineeringInternBackend: {
        title: "Software Engineer Praktikant",
        employer: "John Deere",
      },
      softwareEngineeringInternFrontend: {
        title: "Software Engineer Praktikant",
        employer: "John Deere",
      },
      softwareDevelopmentIntern: {
        title: "Softwareentwickler Praktikant",
        employer: "Universität von Iowa",
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
      builtWithText: {
        head: "Von Grund auf mit",
        tail: "entwickelt",
      },
      drummerIconText: "Schlagzeuger-Symbol von",
    },
  },
}
