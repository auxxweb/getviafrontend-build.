import { memo, useCallback, useState } from 'react'
import { T8_BG, t8GradientStyle } from './constants.js'

function digitsOnly(s) {
  return String(s ?? '').replace(/\D/g, '')
}

export const TemplateEightFloatingButtons = memo(function TemplateEightFloatingButtons({
  phone,
  whatsapp,
  shareTitle,
  shareText,
}) {
  const tel = digitsOnly(phone)
  const wa = digitsOnly(whatsapp || phone)
  const [shareHint, setShareHint] = useState(null)

  const handleShare = useCallback(async () => {
    const url = typeof window !== 'undefined' ? window.location.href : ''
    const title = shareTitle || (typeof document !== 'undefined' ? document.title : '') || 'Page'
    const text = shareText ?? ''

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title, text, url })
        setShareHint(null)
        return
      } catch (e) {
        if (e?.name === 'AbortError') return
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url)
        setShareHint('copied')
        window.setTimeout(() => setShareHint(null), 2000)
        return
      } catch {
        /* fall through */
      }
    }

    window.prompt('Copy this link:', url)
  }, [shareTitle, shareText])

  const fabShadow = 'shadow-[0px_12px_32px_rgba(0,0,0,0.35)]'
  const fabRing = 'ring-1 ring-white/15'
  const filledFab = `grid size-12 place-items-center rounded-full text-[20px] text-white transition hover:opacity-90 sm:size-14 ${fabShadow} ${fabRing}`
  const outlineFab = `grid size-12 place-items-center rounded-full border-2 border-white/25 bg-white/5 text-[18px] text-white/90 transition hover:bg-white/10 sm:size-14 ${fabShadow}`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {shareHint ? (
        <span
          className={`rounded-[10px] px-3 py-2 text-[11px] font-semibold tracking-wide text-white/90 ${fabShadow} ring-1 ring-white/15`}
          style={{ backgroundColor: `${T8_BG}` }}
        >
          Link copied
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleShare}
          className={outlineFab}
          aria-label="Share this page"
        >
          <span aria-hidden>↗</span>
        </button>
        {wa ? (
          <a
            href={`https://wa.me/${wa}`}
            target="_blank"
            rel="noreferrer"
            className={filledFab}
            style={t8GradientStyle}
            aria-label="WhatsApp"
          >
            <span aria-hidden>💬</span>
          </a>
        ) : null}
        {tel ? (
          <a href={`tel:${tel}`} className={filledFab} style={t8GradientStyle} aria-label="Call">
            <span aria-hidden>📞</span>
          </a>
        ) : null}
      </div>
    </div>
  )
})
