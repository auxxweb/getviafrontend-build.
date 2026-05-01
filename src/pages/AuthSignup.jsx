import { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'

export const AuthSignup = memo(function AuthSignup() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  return (
    <div className="min-h-screen bg-[#fbf9ee]">
      <main className="container-page py-10">
        <div className="mx-auto w-full max-w-[520px] rounded-[24px] bg-white p-6 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-8">
          <img
            src={`${import.meta.env.BASE_URL}favicon.svg`}
            alt="Getvia"
            className="h-[28px] w-auto object-contain"
            loading="eager"
          />

          <h1 className="mt-6 font-['Inter:Bold',sans-serif] text-[32px] font-bold leading-[40px] text-[#003314]">
            Sign up
          </h1>

          {step === 1 ? (
            <>
              <p className="mt-2 text-[14px] leading-[20px] text-black/60">
                Enter email and mobile to continue.
              </p>
              <div className="mt-6 grid gap-3">
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                />
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile"
                  inputMode="numeric"
                />
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setStep(2)}
                >
                  Send OTP
                </Button>
              </div>
            </>
          ) : null}

          {step === 2 ? (
            <>
              <p className="mt-2 text-[14px] leading-[20px] text-black/60">
                Enter the OTP sent to your mobile.
              </p>
              <div className="mt-6 grid gap-3">
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] tracking-[4px] outline-none"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="OTP"
                  inputMode="numeric"
                />
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => setStep(3)}
                >
                  Verify
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  className="w-full"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
              </div>
            </>
          ) : null}

          {step === 3 ? (
            <>
              <p className="mt-2 text-[14px] leading-[20px] text-black/60">
                Set your password.
              </p>
              <div className="mt-6 grid gap-3">
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                />
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  placeholder="Confirm password"
                  type="password"
                />
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => navigate('/auth/onboarding/business-details')}
                >
                  Create account
                </Button>
              </div>
            </>
          ) : null}

          <div className="mt-6 flex items-center justify-between gap-3 text-[13px]">
            <Button as="link" to="/auth/login" variant="ghost" size="md" className="px-0">
              Already have an account?
            </Button>
            <Button as="link" to="/" variant="ghost" size="md" className="px-0">
              Back to home
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
})

