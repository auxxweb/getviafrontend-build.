import { memo } from 'react'
import { Section } from '../common/Section.jsx'
import { Card } from '../ui/Card.jsx'
import { cn } from '../../utils/cn.js'

function ItemCard({ title, description, priceOrLabel }) {
  return (
    <Card
      hover={false}
      className="overflow-hidden border border-black/10 bg-[rgba(217,217,217,0.2)] p-4"
    >
      <p className="text-[16px] font-semibold text-[#0b1c30]">{title}</p>
      {priceOrLabel ? (
        <p className="mt-1 text-[13px] font-extrabold text-[#006e12]">{priceOrLabel}</p>
      ) : null}
      {description ? (
        <p className="mt-2 text-[13px] font-medium leading-[19px] text-black/60">
          {description}
        </p>
      ) : null}
    </Card>
  )
}

export const CardsSection = memo(function CardsSection({
  title,
  items,
  className = '',
}) {
  if (!items?.length) return null

  return (
    <Section className={cn('py-8 sm:py-10', className)}>
      <div className="flex items-end justify-between gap-3">
        <p className="text-[18px] font-extrabold text-[#0b1c30]">{title}</p>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, idx) => (
          <ItemCard
            key={it?.id ?? `${title}-${idx}`}
            title={it?.title ?? it?.name ?? ''}
            description={it?.description ?? ''}
            priceOrLabel={it?.price ?? it?.priceOrLabel ?? it?.label ?? ''}
          />
        ))}
      </div>
    </Section>
  )
})

