import { memo } from 'react'
import { Card } from '../ui/Card.jsx'
import { PlaceholderImage } from '../ui/PlaceholderImage.jsx'
import { CTAButtons } from '../common/CTAButtons.jsx'
import { cn } from '../../utils/cn.js'

export const BusinessHero = memo(function BusinessHero({ businessData, onEnquiry }) {
  const cover = businessData?.images?.[0]
  return (
    <section className="bg-paper pt-6 md:pt-8">
      <div className="container-page">
        <div className="grid gap-5 lg:grid-cols-[560px_1fr] lg:gap-8">
          <div className="rounded-[30px] bg-[rgba(217,217,217,0.2)] p-4 sm:p-5">
            <div className="relative overflow-hidden rounded-[24px]">
              <PlaceholderImage
                className="h-[220px] w-full sm:h-[260px]"
                label="Business cover"
                src={typeof cover === 'string' ? cover : cover?.src}
                alt={businessData?.name ?? ''}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/0 to-black/0" />
              <p className="absolute bottom-5 right-6 text-3xl font-semibold italic text-white drop-shadow sm:text-4xl">
                {businessData?.name}
              </p>
            </div>
          </div>

          <div className="rounded-[44px] bg-[rgba(217,217,217,0.2)] p-4 sm:p-6">
            <Card hover={false} className="overflow-hidden border border-black/10 bg-white/70 p-5 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-[14px] font-semibold text-black/60">
                    {businessData?.category}
                  </p>
                  <p className="mt-2 text-[28px] font-extrabold text-[#0b1c30] sm:text-[32px]">
                    {businessData?.name}
                  </p>
                  {businessData?.rating ? (
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#e5eeff] px-3 py-1 text-[13px] font-extrabold text-[#0b1c30]">
                      <span>{businessData.rating}</span>
                      <span className="text-black/30">•</span>
                      <span className="font-semibold text-black/60">
                        {businessData?.reviews?.length ?? 0} reviews
                      </span>
                    </div>
                  ) : null}
                  {businessData?.address ? (
                    <p className="mt-3 text-[13px] font-medium text-[#45464d]">
                      {businessData.address}
                    </p>
                  ) : null}
                </div>

                <div className={cn('shrink-0', businessData?.rating ? '' : 'hidden sm:block')}>
                  {businessData?.rating ? (
                    <div className="rounded-lg bg-[#e5eeff] px-3 py-2 text-[18px] font-extrabold text-[#0b1c30]">
                      {businessData.rating}
                    </div>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-[14px] font-medium leading-[20px] text-black/60">
                {businessData?.description}
              </p>

              <div className="mt-5">
                <CTAButtons
                  phone={businessData?.phone}
                  whatsapp={businessData?.whatsapp}
                  onEnquiry={onEnquiry}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
})

