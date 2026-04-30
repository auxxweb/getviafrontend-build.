import { memo } from 'react'

const DAY_LABELS = {
  mon: 'Monday',
  tue: 'Tuesday',
  wed: 'Wednesday',
  thu: 'Thursday',
  fri: 'Friday',
  sat: 'Saturday',
  sun: 'Sunday',
}

const sectionScroll = 'scroll-mt-[88px]'

export const TemplateTwelveWorkingHoursSection = memo(function TemplateTwelveWorkingHoursSection({
  title,
  workingHours,
  id = 'hours',
}) {
  const entries = Object.entries(workingHours ?? {})

  return (
    <section id={id} className={`border-t border-black/[0.04] bg-white/20 py-14 ${sectionScroll}`}>
      <div className="mx-auto w-full max-w-[560px] px-5">
        <h2 className="text-center font-playfair text-[24px] font-semibold sm:text-[26px]">{title}</h2>
        <ul className="mt-8 grid gap-3">
          {entries.map(([key, value]) => (
            <li
              key={key}
              className="flex justify-between gap-4 border-b border-black/[0.06] pb-2 text-[13px] font-medium"
            >
              <span className="text-ink/55">{DAY_LABELS[key] ?? key}</span>
              <span className="text-ink/80">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
})
