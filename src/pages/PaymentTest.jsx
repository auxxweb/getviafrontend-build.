import { memo, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'

function readSelectedPlan() {
  try {
    const raw = localStorage.getItem('getvia_selected_plan')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const PaymentTest = memo(function PaymentTest() {
  const navigate = useNavigate()
  const plan = useMemo(() => readSelectedPlan(), [])
  const [processing, setProcessing] = useState(false)

  return (
    <div className="min-h-screen bg-[#fbf9ee]">
      <main className="container-page py-10">
        <div className="mx-auto w-full max-w-[720px] rounded-[24px] bg-white p-6 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-8">
          <h1 className="text-center font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#006e12] sm:text-[32px] sm:leading-[38px]">
            Razorpay Test Payment
          </h1>
          <p className="mt-2 text-center text-[12px] font-medium text-black/50">
            This is a test checkout step for your selected plan.
          </p>

          <div className="mt-6 rounded-[18px] bg-[#fbf9ee]/60 p-5 ring-1 ring-black/5">
            <p className="text-[12px] font-semibold text-black/60">Selected plan</p>
            <p className="mt-1 text-[18px] font-extrabold text-black">
              {plan?.name ?? 'No plan selected'}
            </p>
            <p className="mt-1 text-[14px] font-semibold text-black/70">
              {plan?.priceLabel ?? ''}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button variant="ghost" size="md" className="w-full" onClick={() => navigate('/auth/plans')}>
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              disabled={!plan || processing}
              onClick={() => {
                setProcessing(true)
                // Client-only demo flow: mark paid and continue.
                setTimeout(() => {
                  localStorage.setItem(
                    'getvia_payment_status',
                    JSON.stringify({ ok: true, at: Date.now(), plan }),
                  )
                  setProcessing(false)
                  navigate('/auth/done')
                }, 900)
              }}
            >
              {processing ? 'Processing…' : 'Pay Now (Test)'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
})

