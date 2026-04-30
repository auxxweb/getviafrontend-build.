import { memo, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'

function readPayment() {
  try {
    const raw = localStorage.getItem('getvia_payment_status')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export const PaymentDone = memo(function PaymentDone() {
  const navigate = useNavigate()
  const payment = useMemo(() => readPayment(), [])

  return (
    <div className="min-h-screen bg-[#fbf9ee]">
      <main className="container-page py-10">
        <div className="mx-auto w-full max-w-[720px] rounded-[24px] bg-white p-6 text-center shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-10">
          <div className="mx-auto grid size-[64px] place-items-center rounded-full bg-[#eaf4ee] text-[#006e12] ring-1 ring-[#006e12]/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="mt-6 font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#003314] sm:text-[32px] sm:leading-[38px]">
            Payment Completed
          </h1>
          <p className="mt-2 text-[13px] font-medium text-black/55">
            {payment?.plan?.name ? `Plan: ${payment.plan.name}` : 'Your plan is active.'}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => navigate('/dashboard')}
            >
              Explore Dashboard
            </Button>
            <Button variant="ghost" size="md" className="w-full" onClick={() => navigate('/')}>
              Go to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
})

