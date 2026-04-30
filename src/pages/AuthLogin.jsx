import { memo, useState } from 'react'
import { Button } from '../components/ui/Button.jsx'
import { Input } from '../components/ui/Input.jsx'
import { cn } from '../utils/cn.js'

export const AuthLogin = memo(function AuthLogin() {
  const [mode, setMode] = useState('email') // 'email' | 'otp'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')

  return (
    <div className="min-h-screen bg-[#fbf9ee]">
      <main className="container-page py-10">
        <div className="mx-auto w-full max-w-[520px] rounded-[24px] bg-white p-6 shadow-[0px_10px_24px_rgba(0,0,0,0.08)] ring-1 ring-black/5 sm:p-8">
          <img
            src="/getvia-logo.png"
            alt="Getvia"
            className="h-[28px] w-auto object-contain"
            loading="eager"
          />

          <h1 className="mt-6 font-['Inter:Bold',sans-serif] text-[32px] font-bold leading-[40px] text-[#003314]">
            Sign in
          </h1>
          <p className="mt-2 text-[14px] leading-[20px] text-black/60">
            Continue with email or mobile OTP.
          </p>

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => setMode('email')}
              className={cn(
                'h-10 rounded-xl border px-4 text-[12px] font-semibold sm:text-[13px]',
                mode === 'email'
                  ? 'border-[#005dac] bg-brand-700 text-white'
                  : 'border-[#c1c7d4] bg-white text-[#414752]',
              )}
            >
              Email
            </button>
            <button
              type="button"
              onClick={() => setMode('otp')}
              className={cn(
                'h-10 rounded-xl border px-4 text-[12px] font-semibold sm:text-[13px]',
                mode === 'otp'
                  ? 'border-[#005dac] bg-brand-700 text-white'
                  : 'border-[#c1c7d4] bg-white text-[#414752]',
              )}
            >
              Mobile OTP
            </button>
          </div>

          <form className="mt-6 grid gap-3" onSubmit={(e) => e.preventDefault()}>
            {mode === 'email' ? (
              <>
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  type="email"
                />
                <Input
                  inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  type="password"
                />
              </>
            ) : (
              <Input
                inputClassName="h-[53px] w-full rounded-[12px] border border-black/20 bg-white px-4 text-[14px] outline-none"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Mobile"
                inputMode="numeric"
              />
            )}

            <Button variant="primary" size="md" className="w-full">
              Continue
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-between gap-3 text-[13px]">
            <Button as="link" to="/auth/signup" variant="ghost" size="md" className="px-0">
              Create account
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

