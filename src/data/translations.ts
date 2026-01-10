import type { Language } from "../models/language"
import type { Translation } from "../models/translation"


export const translations: Record<Language, Translation> = {
  english: {
    bar: {
      navigation: {
        welcome: "Welcome",
        projects: "Projects",
        experience: "Experience",
        posts: "Blog posts",
      },
      settings: {
        hide: "Hide settings",
        show: "Show settings",
        language: "Language",
        lightDarkMode: "Light/dark mode",
      },
    },
    contact: {
      button: "Send me a message",
      form: {
        header: "Contact",
        email: {
          missing: "Email required",
          label: "Email",
          placeholder: "example@email.com",
        },
        message: {
          missing: "Message required",
          label: "Message",
          placeholder: "Write your message",
        },
        button: {
          submit: "Send",
          cancel: "Cancel",
        },
      },
      completed: {
        close: "Close",
        message: "Thank you for the message!",
      },
    },
    section: {
      experience: {
        and: "and",
        timelineEnd: "Career start",
        timelineStart: "Present",
        title: "My main gigs",
        subtitle: {
          head: "For more details about each of my roles visit my",
          tail: "profile",
        },
      },
      posts: {
        new: "New",
        readMore: "Read more",
        subtitle: "From technical challenges to key design decisions",
        title: "Lessons learned",
      },
      projects: {
        title: "Outside of work",
        subtitle: {
          head: "To explore even more projects visit my",
          tail: "profile",
        },
      },
      welcome: {
        title: {
          head: "Hi, I'm Levin!",
          tail: "Software Engineer & Musician",
        },
        subtitle: "Focussing on cloud-based backend systems & audio/music systems across platforms",
      },
    },
    post: {
      home: "Home",
      notFound: {
        title: "Missed the beat",
        subtitle: {
          head: "Back to the homepage",
          tail: "find all blog posts there",
        },
      },
    },
    footer: {
      builtWith: {
        head: "Built from scratch with",
      },
      drummerIconText: "Drummer icon by",
    },
  },

  german: {
    bar: {
      navigation: {
        welcome: "Willkommen",
        projects: "Projekte",
        experience: "Erfahrung",
        posts: "Blogbeiträge",
      },
      settings: {
        hide: "Einstellungen verstecken",
        show: "Einstellungen zeigen",
        language: "Sprache",
        lightDarkMode: "Hell-/Dunkelmodus",
      },
    },
    contact: {
      button: "Schick mir eine Nachricht",
      form: {
        header: "Kontakt",
        email: {
          missing: "Email erforderlich",
          label: "Email",
          placeholder: "example@email.com",
        },
        message: {
          missing: "Nachricht erforderlich",
          label: "Nachricht",
          placeholder: "Gib deine Nachricht ein",
        },
        button: {
          submit: "Senden",
          cancel: "Abbrechen",
        },
      },
      completed: {
        close: "Schließen",
        message: "Danke für die Nachricht!",
      },
    },
    section: {
      experience: {
        and: "und",
        timelineEnd: "Karrierebeginn",
        timelineStart: "Aktuell",
        title: "Meine Hauptjobs",
        subtitle: {
          head: "Für mehr Details zu meinen Jobs besuche mein",
          tail: "Profil",
        },
      },
      posts: {
        new: "Neu",
        readMore: "Weiterlesen",
        subtitle: "Von technischen Herausforderungen bis zu zentralen Designentscheidungen",
        title: "Meine Erkenntnisse",
      },
      projects: {
        title: "Außerhalb der Arbeit",
        subtitle: {
          head: "Um noch mehr meiner Projekte zu entdecken, besuche mein",
          tail: "Profil",
        },
      },
      welcome: {
        title: {
          head: "Hi, ich bin Levin!",
          tail: "Software Engineer & Musiker",
        },
        subtitle: "Mit Fokus auf cloudbasierte Backend-Systeme und plattformübergreifende Audio-/Musiksysteme",
      },
    },
    post: {
      home: "Startseite",
      notFound: {
        title: "Den Einsatz verpasst",
        subtitle: {
          head: "Zurück zur Startseite",
          tail: "dort findest du alle verfügbaren Beiträge",
        },
      },
    },
    footer: {
      builtWith: {
        head: "Von Grund auf mit",
        tail: "entwickelt",
      },
      drummerIconText: "Schlagzeuger-Symbol von",
    },
  },
}
