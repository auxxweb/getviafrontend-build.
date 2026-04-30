import { memo } from 'react'
import { Section } from '../common/Section.jsx'
import { ImageGallery } from '../common/ImageGallery.jsx'

export const GallerySection = memo(function GallerySection({ businessData }) {
  const images = businessData?.images?.slice(1) ?? []
  if (!images.length) return null

  return (
    <Section className="py-8 sm:py-10">
      <p className="text-[18px] font-extrabold text-[#0b1c30]">Gallery</p>
      <div className="mt-4">
        <ImageGallery images={images} />
      </div>
    </Section>
  )
})

