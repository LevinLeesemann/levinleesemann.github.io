import type { Language } from "./language"

type ContactFormField = { missing: string, label: string, placeholder: string }
type Split = { head: string, tail: string }

export type Translated<T> = Record<Language, T>

export type Translation = {
  bar: {
    navigation: {
      welcome: string
      projects: string
      experience: string
      posts: string
    }
    settings: {
      hide: string
      show: string
      language: string
      lightDarkMode: string
    }
  }
  contact: {
    button: string
    form: {
      email: ContactFormField
      header: string
      message: ContactFormField
      button: {
        cancel: string
        submit: string
      }
    }
    completed: {
      close: string
      message: string
    }
  }
  section: {
    experience: {
      and: string
      timelineEnd: string
      timelineStart: string
      title: string
      subtitle: Split
    }
    posts: {
      new: string
      readMore: string
      subtitle: string
      title: string
    }
    projects: {
      title: string
      subtitle: Split
    }
    welcome: {
      title: Split
      subtitle: string
    }
  }
  post: {
    home: string
    notFound: {
      title: string
      subtitle: Split
    }
  }
  footer: {
    builtWith: {
      head: string
      tail?: string
    }
    drummerIconText: string
  }
}
