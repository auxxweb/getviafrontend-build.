import { memo } from 'react'
import { T9_NAVY, T9_CARD_LIGHT } from './constants.js'

const scroll = 'scroll-mt-[88px]'

const DAY_LABELS = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
}

export const TemplateNineWorkingHoursSection = memo(function TemplateNineWorkingHoursSection({
  id = 'hours',
  title,
  workingHours,
}) {
  const entries = Object.entries(workingHours ?? {})

  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: T9_CARD_LIGHT }}>
      <div className="mx-auto w-full max-w-[520px] px-5">
        <h2 className="text-center text-[16px] font-extrabold sm:text-[18px]" style={{ color: T9_NAVY }}>
          {title}
        </h2>
        <ul className="mt-6 grid gap-2.5">
          {entries.map(([key, value]) => (
            <li
              key={key}
              className="flex justify-between gap-4 border-b border-black/[0.08] pb-2 text-[11px] font-semibold"
            >
              <span className="text-black/55">{DAY_LABELS[key] ?? key}</span>
              <span className="text-[#1a2744]">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
