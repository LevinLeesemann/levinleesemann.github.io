import { GoMail } from "react-icons/go"
import type { Translation } from "../models/translation"

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
            <button onClick={props.showContactModal} className="group flex flex-row items-center justify-center hover:cursor-pointer py-2 px-4 hover:px-6 transition-[padding] duration-250">
              <p className="text-text text-sm sm:text-base size-full inline-flex items-center gap-2 group-hover:gap-3 transition-[gap] duration-250">
                {props.translation.contactButton.label} <GoMail />
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
