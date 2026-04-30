import { memo, useCallback, useState } from 'react'
import { T9_NAVY, T9_TEAL } from './constants.js'

function digitsOnly(s) {
  return String(s ?? '').replace(/\D/g, '')
}

export const TemplateNineFloatingButtons = memo(function TemplateNineFloatingButtons({
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

  const fabShadow = 'shadow-[0px_12px_32px_rgba(0,0,0,0.07)]'
  const fabRing = 'ring-1 ring-black/[0.06]'
  const filledFab = `grid size-12 place-items-center rounded-full text-[20px] text-white transition hover:opacity-90 sm:size-14 ${fabShadow} ${fabRing}`
  const outlineFab = `grid size-12 place-items-center rounded-full border-2 text-[18px] transition hover:opacity-90 sm:size-14 ${fabShadow}`

  const hintBg = `${T9_TEAL}18`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {shareHint ? (
        <span
          className={`rounded-[10px] px-3 py-2 text-[11px] font-semibold tracking-wide ${fabShadow} ${fabRing}`}
          style={{ backgroundColor: hintBg, color: T9_NAVY }}
        >
          Link copied
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleShare}
          className={outlineFab}
          style={{ borderColor: T9_NAVY, backgroundColor: '#fff', color: T9_NAVY }}
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
            style={{ backgroundColor: T9_TEAL }}
            aria-label="WhatsApp"
          >
            <span aria-hidden>💬</span>
          </a>
        ) : null}
        {tel ? (
          <a href={`tel:${tel}`} className={filledFab} style={{ backgroundColor: T9_NAVY }} aria-label="Call">
            <span aria-hidden>📞</span>
          </a>
        ) : null}
      </div>
    </div>
  )
})
