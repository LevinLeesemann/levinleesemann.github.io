import { useForm } from '@formspree/react'
import { GoX } from 'react-icons/go'
import type { Translation } from '../models/translation'
import Button from './Button'

type ContactFormProps = {
  close: () => void
  isHidden: boolean
  translation: Translation
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
          {props.translation.contactForm.thankYou}
        </p>
        <button type="button" onClick={props.close} className="size-fit py-2 px-4 hover:px-6 transition-[padding] duration-250 rounded-full bg-accent text-background hover:cursor-pointer active:bg-accent-muted" disabled={state.submitting}>
          {props.translation.contactForm.buttonLabel.close}
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
        {props.translation.contactForm.header}
      </p>
      <label htmlFor="email" className="text-text-muted">
        {props.translation.contactForm.email.label}
      </label>
      {hasError("email") &&
        <p className="text-xs text-red-500">
          {props.translation.contactForm.email.missingMessage}
        </p>}
      <input placeholder={props.translation.contactForm.email.placeholder} className="placeholder-text-muted border border-border rounded-lg w-full py-2 px-3 mb-2" id="email" type="email" name="email" />
      <label htmlFor="message" className="text-text-muted">
        {props.translation.contactForm.message.label}
      </label>
      {hasError("message") &&
        <p className="text-xs text-red-500">
          {props.translation.contactForm.message.missingMessage}
        </p>}
      <textarea placeholder={props.translation.contactForm.message.placeholder} className="placeholder-text-muted border border-border box-border rounded-lg size-full py-2 px-3 mb-2 resize-none" id="message" name="message" />
      <div className="flex flex-row justify-between self-stretch">
        <Button disabled={state.submitting} type="submit">
          {props.translation.contactForm.buttonLabel.submit}
        </Button>
        <Button disabled={state.submitting} onClick={props.close} type="button">
          {props.translation.contactForm.buttonLabel.cancel}
        </Button>
      </div>
    </form >
  )
}
