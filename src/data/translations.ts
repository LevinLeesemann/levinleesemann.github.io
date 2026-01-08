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
        welcome: "Welcome",
        projects: "Projects",
        experience: "Experience",
        posts: "Blog posts",
      },
    },
    settingsBar: {
      hideLabel: "Hide settings",
      showLabel: "Show settings",
      language: "Language",
      lightDarkMode: "Light/dark mode",
    },
    contactButton: {
      label: "Send me a message",
    },
    contactForm: {
      header: "Contact",
      email: {
        missingMessage: "Email required",
        label: "Email",
        placeholder: "example@email.com",
      },
      message: {
        missingMessage: "Message required",
        label: "Message",
        placeholder: "Write your message",
      },
      buttonLabel: {
        submit: "Send",
        cancel: "Cancel",
        close: "Close",
      },
      thankYou: "Thank you for the message!",
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
        embedded: "Embedded",
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
      softwareEngineerAudio: {
        title: "Software Engineer - Audio",
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
      developerAudioEngineer: {
        title: "Software Developer/Audio Engineer",
        employer: "EON Reality",
      },
      intern: {
        title: "Intern",
        employer: "German Aerospace Center",
      },
    },
    experienceSection: {
      and: "and",
      timelineEnd: "Career start",
      timelineStart: "Present",
      title: "My main gigs",
      subtitle: {
        head: "For more details about each of my roles visit my",
        tail: "profile",
      },
    },
    postsSection: {
      title: "Lessons learned",
      subtitle: "From technical challenges to key design decisions",
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
        welcome: "Willkommen",
        projects: "Projekte",
        experience: "Erfahrung",
        posts: "Blogbeiträge",
      },
    },
    settingsBar: {
      hideLabel: "Einstellungen verstecken",
      showLabel: "Einstellungen zeigen",
      language: "Sprache",
      lightDarkMode: "Hell-/Dunkelmodus",
    },
    contactButton: {
      label: "Schick mir eine Nachricht",
    },
    contactForm: {
      header: "Kontakt",
      email: {
        missingMessage: "Email erforderlich",
        label: "Email",
        placeholder: "example@email.com",
      },
      message: {
        missingMessage: "Nachricht erforderlich",
        label: "Nachricht",
        placeholder: "Gib deine Nachricht ein",
      },
      buttonLabel: {
        submit: "Senden",
        cancel: "Abbrechen",
        close: "Schließen",
      },
      thankYou: "Danke für die Nachricht!",
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
        embedded: "Embedded",
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
      softwareEngineerAudio: {
        title: "Software Engineer - Audio",
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
      developerAudioEngineer: {
        title: "Softwareentwickler/Audio Engineer",
        employer: "EON Reality",
      },
      intern: {
        title: "Praktikant",
        employer: "Deutsches Zentrum für Luft- und Raumfahrt",
      },
    },
    experienceSection: {
      and: "und",
      timelineEnd: "Karrierebeginn",
      timelineStart: "Aktuell",
      title: "Meine Hauptjobs",
      subtitle: {
        head: "Für mehr Details zu meinen Jobs besuche mein",
        tail: "Profil",
      },
    },
    postsSection: {
      title: "Meine Erkenntnisse",
      subtitle: "Von technischen Herausforderungen bis zu zentralen Designentscheidungen",
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
