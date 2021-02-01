import { DEFAULT_LANGUAGE } from "constants/locale"

export default function useDateTimeFormat(timestamp) {
  const date = new Date(timestamp)
  let language

  try {
    language = navigator.language
  } catch (error) {
    language = DEFAULT_LANGUAGE
  }

  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }

  return new Intl.DateTimeFormat(language, options).format(date)
}
