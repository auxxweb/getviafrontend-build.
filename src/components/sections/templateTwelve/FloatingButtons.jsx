import { memo, useCallback, useState } from 'react'
import { TW_BROWN, TW_BROWN_LIGHT, TW_CREAM } from './constants.js'

const fabShadow = 'shadow-[0px_12px_32px_rgba(0,0,0,0.07)]'
const fabRing = 'ring-1 ring-black/[0.06]'

function digitsOnly(s) {
  return String(s ?? '').replace(/\D/g, '')
}

export const TemplateTwelveFloatingButtons = memo(function TemplateTwelveFloatingButtons({
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

  const filledFab = `grid size-12 place-items-center rounded-full text-[20px] text-white transition hover:opacity-90 sm:size-14 ${fabShadow} ${fabRing}`
  const outlineFab = `grid size-12 place-items-center rounded-full border-2 text-[18px] transition hover:opacity-90 sm:size-14 ${fabShadow}`

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {shareHint ? (
        <span
          className={`rounded-[10px] px-3 py-2 text-[11px] font-semibold tracking-wide ${fabShadow} ${fabRing}`}
          style={{ backgroundColor: TW_CREAM, color: TW_BROWN }}
        >
          Link copied
        </span>
      ) : null}
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={handleShare}
          className={outlineFab}
          style={{ borderColor: TW_BROWN, backgroundColor: TW_CREAM, color: TW_BROWN }}
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
            style={{ backgroundColor: TW_BROWN_LIGHT }}
            aria-label="WhatsApp"
          >
            <span aria-hidden>💬</span>
          </a>
        ) : null}
        {tel ? (
          <a href={`tel:${tel}`} className={filledFab} style={{ backgroundColor: TW_BROWN }} aria-label="Call">
            <span aria-hidden>📞</span>
          </a>
        ) : null}
      </div>
    </div>
  )
})
