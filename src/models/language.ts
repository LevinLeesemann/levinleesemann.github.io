export type Language = "english" | "german"

export function toLanguage(region: string): Language {
  switch (region) {
    case "DE":
      return "german"
    default:
      return "english"
  }
}
