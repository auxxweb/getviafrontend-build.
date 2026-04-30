import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '../ui/Card.jsx'
import { Button } from '../ui/Button.jsx'
import { PlaceholderImage } from '../ui/PlaceholderImage.jsx'

export const ListingCard = memo(function ListingCard({ item, onEnquiry, to }) {
  const navigate = useNavigate()
  const href = to ?? (item?.id ? `/profile/${item.id}` : null)

  return (
    <Card
      as="article"
      hover={false}
      className="overflow-hidden border border-black/10 bg-[rgba(217,217,217,0.2)] p-0"
      role={href ? 'button' : undefined}
      tabIndex={href ? 0 : undefined}
      onClick={
        href
          ? () => {
              navigate(href)
            }
          : undefined
      }
      onKeyDown={
        href
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(href)
            }
          : undefined
      }
    >
      <div className="flex gap-4 p-4">
        <div className="size-[96px] shrink-0 overflow-hidden rounded-2xl sm:size-[120px]">
          <PlaceholderImage
            src={item.image}
            alt={item.name}
            label={`${item.name} image`}
            className="h-full w-full"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-[18px] font-semibold text-[#0b1c30] sm:text-[20px]">
                  {item.name}
                </p>
                <span
                  className="inline-flex size-2.5 shrink-0 rounded-full bg-brand-700"
                  aria-hidden
                  title="Verified"
                />
              </div>
              <p className="mt-1 truncate text-[13px] font-medium text-[#45464d] sm:text-[14px]">
                {item.address}
              </p>
            </div>

            <div className="shrink-0 rounded-lg bg-[#e5eeff] px-2 py-1 text-[12px] font-extrabold text-[#0b1c30] sm:text-[13px]">
              {item.rating}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-black/10 bg-[rgba(217,217,217,0.2)] px-3 py-1 text-[12px] font-semibold text-black"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-4 pb-4">
        {/* Mobile: phone under image, others inline to the right */}
        <div className="flex gap-4 sm:hidden">
          <div className="w-[96px] shrink-0">
            <Button
              as="a"
              href={`tel:${item.phone}`}
              unstyled
              className="inline-flex w-full items-center justify-center rounded-[7px] border border-[#006e12] bg-white px-2 py-2 text-[12px] font-semibold text-[#006e12]"
              onClick={(e) => e.stopPropagation()}
            >
              {item.phone}
            </Button>
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <Button
                as="a"
                href={item.whatsappHref}
                unstyled
                className="inline-flex items-center justify-center rounded-[7px] bg-[#006e12] px-3 py-2 text-[12px] font-semibold text-white"
                onClick={(e) => e.stopPropagation()}
              >
                WhatsApp
              </Button>
              <Button
                type="button"
                unstyled
                onClick={(e) => {
                  e.stopPropagation()
                  onEnquiry?.()
                }}
                className="inline-flex items-center justify-center rounded-[7px] border border-[#1b77be] bg-white px-3 py-2 text-[12px] font-semibold text-[#1b77be]"
              >
                Enquiry Now
              </Button>
            </div>
          </div>
        </div>

        {/* sm+: keep all buttons on one line, scroll if needed */}
        <div className="no-scrollbar mt-3 hidden flex-nowrap items-center gap-2 overflow-x-auto pb-1 sm:flex">
          <Button
            as="a"
            href={`tel:${item.phone}`}
            unstyled
            className="inline-flex shrink-0 items-center justify-center rounded-[7px] border border-[#006e12] bg-white px-3 py-2 text-[12px] font-semibold text-[#006e12]"
            onClick={(e) => e.stopPropagation()}
          >
            {item.phone}
          </Button>
          <Button
            as="a"
            href={item.whatsappHref}
            unstyled
            className="inline-flex shrink-0 items-center justify-center rounded-[7px] bg-[#006e12] px-3 py-2 text-[12px] font-semibold text-white"
            onClick={(e) => e.stopPropagation()}
          >
            WhatsApp
          </Button>
          <Button
            type="button"
            unstyled
            onClick={(e) => {
              e.stopPropagation()
              onEnquiry?.()
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-[7px] border border-[#1b77be] bg-white px-3 py-2 text-[12px] font-semibold text-[#1b77be]"
          >
            Enquiry Now
          </Button>
        </div>
      </div>
    </Card>
  )
})

