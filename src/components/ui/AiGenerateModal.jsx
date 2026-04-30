import { memo, useEffect, useMemo, useState } from 'react'
import { Button } from './Button.jsx'
import { Input } from './Input.jsx'
import { cn } from '../../utils/cn.js'

export const AiGenerateModal = memo(function AiGenerateModal({
  open,
  title = 'Generate with AI',
  promptPlaceholder = 'What should the AI generate?',
  initialPrompt = '',
  generateText,
  onApply,
  onClose,
}) {
  const [status, setStatus] = useState('idle') // 'idle' | 'generating' | 'done'
  const [prompt, setPrompt] = useState(initialPrompt)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!open) return
    setStatus('idle')
    setPrompt(initialPrompt)
    setText('')
  }, [open, initialPrompt])

  const canGenerate = useMemo(() => Boolean(generateText) && prompt.trim().length > 0, [generateText, prompt])

  const runGenerate = async () => {
    if (!generateText) return
    setStatus('generating')
    try {
      const out = await generateText(prompt)
      setText(out ?? '')
      setStatus('done')
    } catch {
      setText('Failed to generate. Please try again.')
      setStatus('done')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-[720px] overflow-hidden rounded-[18px] bg-white shadow-[0px_18px_48px_rgba(0,0,0,0.25)] ring-1 ring-black/10">
          <div className="flex items-center justify-between gap-3 border-b border-black/10 px-5 py-4">
            <p className="text-[14px] font-bold text-[#003314]">{title}</p>
            <button
              type="button"
              onClick={onClose}
              className="grid size-[32px] place-items-center rounded-[10px] hover:bg-black/5"
              aria-label="Close"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M6 6L18 18"
                  stroke="#1A1C19"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M18 6L6 18"
                  stroke="#1A1C19"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className="px-5 py-5">
            <Input
              inputClassName="h-[44px] w-full rounded-[12px] border border-black/15 bg-white px-4 text-[13px] outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={promptPlaceholder}
            />

            <div className="mt-4 rounded-[14px] border border-black/10 bg-[#fbf9ee]/40 p-4">
              {status === 'generating' ? (
                <div className="flex items-center gap-3">
                  <div className="size-[18px] animate-spin rounded-full border-2 border-black/10 border-t-[#006e12]" />
                  <p className="text-[13px] font-medium text-black/60">Generating…</p>
                </div>
              ) : (
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Preview will appear here…"
                  className={cn(
                    'min-h-[220px] w-full resize-none rounded-[12px] border border-black/10 bg-white p-4 text-[13px] outline-none',
                    status === 'done' ? '' : 'opacity-70',
                  )}
                />
              )}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
              <Button variant="ghost" size="md" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="secondary"
                size="md"
                disabled={!canGenerate || status === 'generating'}
                onClick={runGenerate}
              >
                {status === 'done' ? 'Regenerate' : 'Generate'}
              </Button>
              <Button
                variant="primary"
                size="md"
                disabled={status !== 'done' || text.trim().length === 0}
                onClick={() => onApply?.(text)}
              >
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

