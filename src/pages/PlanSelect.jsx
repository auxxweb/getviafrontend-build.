import { memo, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { cn } from '../utils/cn.js'

const plans = [
  { id: 'free', name: 'Free', priceLabel: '₹0', badge: null },
  { id: 'core', name: 'Core Plan', priceLabel: '₹999', badge: 'Featured' },
  { id: 'pro', name: 'Pro Plan', priceLabel: '₹4,999', badge: null },
  { id: 'premium', name: 'Premium Plan', priceLabel: '₹9,999', badge: null },
]

export const PlanSelect = memo(function PlanSelect() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('core')

  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === selected) ?? plans[0],
    [selected],
  )

  return (
    <div className="min-h-screen bg-[#fbf9ee]">
      <main className="container-page py-10">
        <div className="mx-auto w-full max-w-[720px] rounded-[24px] bg-white p-6 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-8">
          <h1 className="text-center font-['Inter:Bold',sans-serif] text-[28px] font-bold leading-[34px] text-[#006e12] sm:text-[32px] sm:leading-[38px]">
            Select Plan
          </h1>
          <p className="mt-2 text-center text-[12px] font-medium text-black/50">
            Choose a plan to continue to payment.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {plans.map((p) => {
              const active = p.id === selected
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelected(p.id)}
                  className={cn(
                    'relative w-full rounded-[16px] border bg-[#fbf9ee]/50 p-4 text-left ring-1 ring-black/5 transition',
                    active ? 'border-[#006e12] bg-[#eaf4ee]' : 'border-black/10',
                  )}
                >
                  {p.badge ? (
                    <span className="absolute right-3 top-3 rounded-full bg-[#b3e718] px-3 py-1 text-[10px] font-bold text-black">
                      {p.badge}
                    </span>
                  ) : null}
                  <p className="text-[14px] font-semibold text-[#003314]">{p.name}</p>
                  <p className="mt-1 text-[18px] font-extrabold text-black">{p.priceLabel}</p>
                  <div
                    className={cn(
                      'mt-3 h-[10px] w-[10px] rounded-full border',
                      active ? 'border-[#006e12] bg-[#006e12]' : 'border-black/30 bg-white',
                    )}
                  />
                </button>
              )
            })}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <Button
              variant="ghost"
              size="md"
              className="w-full"
              onClick={() => navigate('/auth/onboarding/gallery')}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                localStorage.setItem('getvia_selected_plan', JSON.stringify(selectedPlan))
                navigate('/auth/payment')
              }}
            >
              Continue to Payment
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
})

