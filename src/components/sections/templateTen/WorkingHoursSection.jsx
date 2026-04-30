import { memo } from 'react'
import { T10_BLUE_SOFT } from './constants.js'

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

export const TemplateTenWorkingHoursSection = memo(function TemplateTenWorkingHoursSection({
  id = 'hours',
  title,
  workingHours,
}) {
  const entries = Object.entries(workingHours ?? {})

  return (
    <section id={id} className={`border-t border-black/[0.04] py-12 ${scroll}`} style={{ backgroundColor: T10_BLUE_SOFT }}>
      <div className="mx-auto w-full max-w-[520px] px-5">
        <h2 className="text-center text-[20px] font-extrabold sm:text-[22px]">{title}</h2>
        <ul className="mt-8 grid gap-3">
          {entries.map(([key, value]) => (
            <li
              key={key}
              className="flex justify-between gap-4 border-b border-black/[0.08] pb-2 text-[12px] font-semibold"
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
