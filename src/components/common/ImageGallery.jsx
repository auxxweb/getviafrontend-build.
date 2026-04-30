import { memo } from 'react'
import { PlaceholderImage } from '../ui/PlaceholderImage.jsx'
import { cn } from '../../utils/cn.js'

export const ImageGallery = memo(function ImageGallery({ images = [], className = '' }) {
  if (!images?.length) return null

  return (
    <div className={cn('grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4', className)}>
      {images.map((img, idx) => (
        <div
          key={img?.id ?? img?.src ?? idx}
          className="overflow-hidden rounded-[16px] border border-black/10 bg-[rgba(217,217,217,0.2)]"
        >
          <PlaceholderImage
            src={typeof img === 'string' ? img : img?.src}
            alt={typeof img === 'string' ? '' : img?.alt ?? ''}
            label="Gallery"
            className="aspect-[4/3] w-full"
          />
        </div>
      ))}
    </div>
  )
})

