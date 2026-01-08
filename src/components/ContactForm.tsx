import { useForm } from '@formspree/react'
import { GoX } from 'react-icons/go'
import { translations } from '../data/translations'
import type { Language } from '../models/language'
import Button from './Button'

type ContactFormProps = {
  close: () => void
  isHidden: boolean
  language: Language
}

export default function ContactForm(props: ContactFormProps) {
  const [state, handleSubmit] = useForm("xrezekpl")

  const fieldErrors = state.errors?.getAllFieldErrors() ?? []

  const hasError = (field: string) =>
    fieldErrors.some(([name, errors]) => name === field && errors.length > 0)

  if (state.succeeded) {
    return (
      <dialog className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center bg-background p-4 gap-4 text-text text-sm sm:text-md md:text-lg w-xs border border-border rounded-lg">
        <p>
          {translations[props.language].contact.completed.message}
        </p>
        <button type="button" onClick={props.close} className="size-fit py-2 px-4 hover:px-6 transition-[padding] duration-250 rounded-full bg-accent text-background hover:cursor-pointer active:bg-accent-muted" disabled={state.submitting}>
          {translations[props.language].contact.completed.message}
        </button>
      </dialog>
    )
  }

  return (
    <form className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-background flex flex-col gap-2 items-start p-4 text-text text-sm sm:text-md md:text-lg w-xs sm:w-sm md:w-md lg:w-2xl h-112 sm:h-94 md:h-112 border border-border rounded-lg" onSubmit={event => { event.preventDefault(); void handleSubmit(event) }}>
      <Button className="absolute right-4 p-1 size-8" onClick={props.close} useCustomPadding={true} type="button">
        <GoX className="size-full" />
      </Button>
      <p>
        {translations[props.language].contact.form.header}
      </p>
      <label htmlFor="email" className="text-text-muted">
        {translations[props.language].contact.form.email.label}
      </label>
      {hasError("email") &&
        <p className="text-xs text-red-500">
          {translations[props.language].contact.form.email.missing}
        </p>}
      <input placeholder={translations[props.language].contact.form.email.placeholder} className="placeholder-text-muted border border-border rounded-lg w-full py-2 px-3 mb-2" id="email" type="email" name="email" />
      <label htmlFor="message" className="text-text-muted">
        {translations[props.language].contact.form.message.label}
      </label>
      {hasError("message") &&
        <p className="text-xs text-red-500">
          {translations[props.language].contact.form.message.missing}
        </p>}
      <textarea placeholder={translations[props.language].contact.form.message.placeholder} className="placeholder-text-muted border border-border box-border rounded-lg size-full py-2 px-3 mb-2 resize-none" id="message" name="message" />
      <div className="flex flex-row justify-between self-stretch">
        <Button disabled={state.submitting} type="submit">
          {translations[props.language].contact.form.button.submit}
        </Button>
        <Button disabled={state.submitting} onClick={props.close} type="button">
          {translations[props.language].contact.form.button.cancel}
        </Button>
      </div>
    </form >
  )
}
