import { memo } from 'react'
import { Section } from '../common/Section.jsx'

export const AboutSection = memo(function AboutSection({ businessData }) {
  if (!businessData?.description) return null

  return (
    <Section className="py-8 sm:py-10" innerClassName="">
      <div className="rounded-[24px] border border-black/10 bg-[rgba(217,217,217,0.2)] p-5 sm:p-7">
        <p className="text-[18px] font-extrabold text-[#0b1c30]">About</p>
        <p className="mt-2 text-[14px] font-medium leading-[20px] text-black/60">
          {businessData.description}
        </p>
      </div>
    </Section>
  )
})

