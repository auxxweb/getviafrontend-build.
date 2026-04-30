import { memo } from 'react'

const scroll = 'scroll-mt-[88px]'
const glass = 'rounded-[18px] bg-white/5 shadow-[0px_18px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/10 backdrop-blur'

const DAY_LABELS = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
}

export const TemplateEightWorkingHoursSection = memo(function TemplateEightWorkingHoursSection({
  id = 'hours',
  title,
  workingHours,
}) {
  const entries = Object.entries(workingHours ?? {})

  return (
    <section id={id} className={`pb-12 ${scroll}`}>
      <div className="mx-auto w-full max-w-[520px] px-5">
        <div className={`px-5 py-6 ${glass}`}>
          <h2 className="text-center text-[12px] font-extrabold text-white/90 sm:text-[14px]">{title}</h2>
          <ul className="mt-5 grid gap-2">
            {entries.map(([key, value]) => (
              <li
                key={key}
                className="flex justify-between gap-4 border-b border-white/10 pb-2 text-[10px] font-semibold text-white/80"
              >
                <span className="text-white/50">{DAY_LABELS[key] ?? key}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
})
