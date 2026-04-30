import { memo } from 'react'
import { Section } from '../common/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { CTAButtons } from '../common/CTAButtons.jsx'

export const ContactSection = memo(function ContactSection({ businessData, onEnquiry }) {
  const hasAny =
    businessData?.address ||
    businessData?.phone ||
    businessData?.whatsapp ||
    businessData?.socialLinks

  if (!hasAny) return null

  return (
    <Section className="py-8 sm:py-10">
      <Card hover={false} className="border border-black/10 bg-[rgba(217,217,217,0.2)] p-5 sm:p-7">
        <p className="text-[18px] font-extrabold text-[#0b1c30]">Contact</p>

        {businessData?.address ? (
          <p className="mt-2 text-[14px] font-medium text-black/60">{businessData.address}</p>
        ) : null}

        <div className="mt-5">
          <CTAButtons
            phone={businessData?.phone}
            whatsapp={businessData?.whatsapp}
            onEnquiry={onEnquiry}
          />
        </div>

        {businessData?.socialLinks ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {Object.entries(businessData.socialLinks).map(([k, href]) =>
              href ? (
                <a
                  key={k}
                  href={href}
                  className="rounded-[10px] border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-[#0b1c30] hover:bg-black/5"
                >
                  {k}
                </a>
              ) : null,
            )}
          </div>
        ) : null}
      </Card>
    </Section>
  )
})

