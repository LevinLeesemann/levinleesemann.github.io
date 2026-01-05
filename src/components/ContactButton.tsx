import { GoMail } from "react-icons/go"
import type { Translation } from "../models/translation"
import Button from "./Button"

type ContactButtonProps = {
  showContactModal: () => void
  translation: Translation
}

export default function ContactButton(props: ContactButtonProps) {
  return (
    <div className="fixed inset-x-0 bottom-16 z-20 pointer-events-none">
      <div className="mx-auto max-w-5xl relative">
        <div className="absolute right-4 flex flex-col items-center gap transition-transform duration-250 pointer-events-none">
          <div className="border rounded-full bg-background border-border pointer-events-auto">
            <Button onClick={props.showContactModal}>
              <p className="inline-flex items-center gap-2 group-hover:gap-3 transition-[gap] duration-250">
                {props.translation.contactButton.label} <GoMail />
              </p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
