import { memo } from 'react'
import { T11_MINT } from './constants.js'

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

export const TemplateElevenWorkingHoursSection = memo(function TemplateElevenWorkingHoursSection({
  id = 'hours',
  title,
  workingHours,
}) {
  const entries = Object.entries(workingHours ?? {})

  return (
    <section id={id} className={`border-t border-black/[0.04] py-14 ${scroll}`} style={{ backgroundColor: T11_MINT }}>
      <div className="mx-auto w-full max-w-[560px] px-5">
        <h2 className="text-center text-[22px] font-extrabold sm:text-[26px]">{title}</h2>
        <ul className="mt-8 grid gap-3">
          {entries.map(([key, value]) => (
            <li
              key={key}
              className="flex justify-between gap-4 border-b border-black/[0.08] pb-2 text-[13px] font-semibold"
            >
              <span className="text-black/55">{DAY_LABELS[key] ?? key}</span>
              <span className="text-[#0f172a]">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
