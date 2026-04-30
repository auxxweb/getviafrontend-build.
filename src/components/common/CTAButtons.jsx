import { memo } from 'react'
import { Button } from '../ui/Button.jsx'
import { cn } from '../../utils/cn.js'
import { SvgIcon } from './SvgIcon.jsx'

function PhoneIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path
        d="M8.7 3.5h.02c.88.02 1.6.6 1.8 1.45l.55 2.36c.16.7-.12 1.43-.7 1.83l-1.22.84c.74 1.46 1.95 2.67 3.41 3.41l.84-1.22c.4-.58 1.13-.86 1.83-.7l2.36.55c.85.2 1.43.92 1.45 1.8v.02l.06 2.02c.02.9-.62 1.68-1.51 1.86a10.9 10.9 0 0 1-2.2.22C9.2 20.44 3.56 14.8 3.56 7.78c0-.75.07-1.48.22-2.2.18-.89.96-1.53 1.86-1.51l2.02.06Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <SvgIcon className={className}>
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.87L4 21l4.8-1.26A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 9.6c.2-.42.4-.43.7-.43.12 0 .27 0 .4.01.14.01.32-.05.5.38.2.45.67 1.56.73 1.68.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.35.41-.12.12-.25.25-.1.49.16.24.7 1.14 1.5 1.85 1.04.91 1.9 1.2 2.14 1.33.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.6-.14 1.18-.2.58-1.14 1.12-1.58 1.2-.42.08-.95.12-1.54-.08-.36-.12-.83-.27-1.43-.52-2.5-1.08-4.12-3.55-4.24-3.72-.12-.16-1-1.32-1-2.52 0-1.2.62-1.79.84-2.03Z"
        fill="currentColor"
      />
    </SvgIcon>
  )
}

export const CTAButtons = memo(function CTAButtons({
  phone,
  whatsapp,
  onEnquiry,
  className = '',
}) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {phone ? (
        <Button
          as="a"
          href={`tel:${phone}`}
          unstyled
          className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[#006e12] bg-white px-4 py-2 text-[13px] font-semibold text-[#006e12]"
        >
          <PhoneIcon className="size-4" />
          Call
        </Button>
      ) : null}
      {whatsapp ? (
        <Button
          as="a"
          href={whatsapp}
          unstyled
          className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[#006e12] px-4 py-2 text-[13px] font-semibold text-white"
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp
        </Button>
      ) : null}
      <Button
        type="button"
        unstyled
        onClick={onEnquiry}
        className="inline-flex items-center justify-center rounded-[10px] border border-[#1b77be] bg-white px-4 py-2 text-[13px] font-semibold text-[#1b77be]"
      >
        Enquiry Now
      </Button>
    </div>
  )
})

