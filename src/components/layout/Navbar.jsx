import { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../utils/cn.js'
import {
  IconMyLocation,
  IconProfile,
  IconSearchRounded,
} from '../ui/Icons.jsx'
import { Input } from '../ui/Input.jsx'
import { Button } from '../ui/Button.jsx'

export const Navbar = memo(function Navbar() {
  const [query, setQuery] = useState('')
  const [location, setLocation] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-[#fbf9ee]">
      {/* Mobile / tablet header */}
      <div className="lg:hidden">
        <div className="bg-[#f6f6f6] opacity-76 shadow-[0px_4px_17.1px_-5px_rgba(0,0,0,0.25)]">
          <div className="container-page flex h-[67px] items-center justify-between">
            <NavLink to="/" aria-label="Getvia" className="relative h-[26px] w-[140px]">
              <img
                src="/getvia-logo.png"
                alt="Getvia"
                className="h-[26px] w-auto object-contain"
                loading="eager"
              />
            </NavLink>
            <div className="relative">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="grid size-[36px] place-items-center bg-transparent"
              >
                <svg
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M2 2H20"
                    stroke="#1A1C19"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 8H20"
                    stroke="#1A1C19"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M2 14H20"
                    stroke="#1A1C19"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {menuOpen ? (
                <div className="absolute right-0 top-[44px] z-50 w-[240px] overflow-hidden rounded-[14px] bg-white shadow-[0px_10px_24px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
                  <div className="flex items-center gap-3 border-b border-black/10 px-4 py-3">
                    <div className="size-[28px] overflow-clip rounded-full bg-[#e3e3de] ring-1 ring-black/10">
                      <div className="relative size-full">
                        <IconProfile className="absolute inset-0 block size-full text-[#1a1c19]" />
                      </div>
                    </div>
                    <p className="text-[14px] font-semibold text-[#1a1c19]">
                      Menu
                    </p>
                  </div>

                  <nav className="grid">
                    {[
                      { to: '/categories', label: 'Categories' },
                      { to: '/offers', label: 'Offers' },
                      { to: '/saved', label: 'Saved' },
                      { to: '/recent', label: 'Recent' },
                    ].map((it) => (
                      <NavLink
                        key={it.to}
                        to={it.to}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            'px-4 py-3 text-[14px] font-medium',
                            isActive
                              ? 'bg-[rgba(0,110,18,0.12)] font-semibold text-[#006e12]'
                              : 'text-[#003314] hover:bg-black/5',
                          )
                        }
                      >
                        {it.label}
                      </NavLink>
                    ))}
                  </nav>

                  <div className="border-t border-black/10 p-3">
                    <Button
                      as="link"
                      to="/auth/login"
                      unstyled
                      className="h-[40px] w-full rounded-[10px] bg-[#006e12] px-3 text-[14px] font-medium text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      Signin / Signup
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className="container-page py-4">
          <form className="grid gap-3" onSubmit={(e) => e.preventDefault()}>
            <Input
              className="h-[53px]"
              leftIcon={
                <div className="ml-[37px] size-[24px]">
                  <IconMyLocation className="size-full text-black opacity-90" />
                </div>
              }
              inputClassName="h-[53px] w-full rounded-[12px] border border-black bg-white pl-[74px] pr-4 font-['Inter:Light',sans-serif] text-[16px] font-light not-italic text-black opacity-63 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline-none"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              aria-label="Location"
            />
            <Input
              className="h-[53px]"
              leftIcon={
                <div className="ml-[28px] size-[24px]">
                  <IconSearchRounded className="size-full text-[#1a1c19] opacity-90" />
                </div>
              }
              inputClassName="h-[53px] w-full rounded-[12px] border border-[#003326] bg-white pl-[59px] pr-4 font-['Inter:Light',sans-serif] text-[16px] font-light not-italic text-[#6b7280] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="How we can help you today?"
              aria-label="Search"
            />
            <Button
              type="submit"
              unstyled
              className="flex h-[53px] w-full items-center justify-center rounded-[16px] bg-[#006e12] px-[32px] py-[16px]"
            >
              <span className="font-['Liberation_Sans:Bold',sans-serif] text-[16px] font-bold not-italic leading-[24px] text-white">
                Search
              </span>
            </Button>
          </form>
        </div>
      </div>

      {/* Desktop header (keep exact layout) */}
      <div className="mx-auto hidden w-full max-w-[1440px] lg:block">
        <div className="relative h-[167px] w-full">
          <div className="absolute left-0 top-0 h-[67px] w-full bg-[#f6f6f6] opacity-76 shadow-[0px_4px_17.1px_-5px_rgba(0,0,0,0.25)]" />

          <div className="relative z-10 flex h-[67px] w-full items-center justify-between gap-4 pr-6 pl-[97px]">
            <NavLink
              to="/"
              className="relative h-[26px] w-[140px] shrink-0"
              aria-label="Getvia"
            >
              <img
                src="/getvia-logo.png"
                alt="Getvia"
                className="h-[26px] w-auto object-contain"
                loading="eager"
              />
            </NavLink>

            <nav
              className="flex min-w-0 flex-1 items-center justify-end gap-8"
              aria-label="Primary"
            >
              <NavLink
                to="/categories"
                className={({ isActive }) =>
                  cn(
                    "shrink-0 whitespace-nowrap font-['Inter',sans-serif] text-[16px] not-italic leading-[10px]",
                    isActive
                      ? 'font-bold text-[#003314]'
                      : 'font-normal text-[#999383] hover:text-[#006e12]',
                  )
                }
              >
                Categories
              </NavLink>
              <NavLink
                to="/offers"
                className={({ isActive }) =>
                  cn(
                    "shrink-0 whitespace-nowrap font-['Inter',sans-serif] text-[16px] not-italic leading-[10px] tracking-[-0.35px]",
                    isActive
                      ? 'font-bold text-[#003314]'
                      : 'font-normal text-[rgba(104,93,69,0.7)] hover:text-[#006e12]',
                  )
                }
              >
                Offers
              </NavLink>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  cn(
                    "shrink-0 whitespace-nowrap font-['Inter',sans-serif] text-[16px] not-italic leading-[10px] tracking-[-0.35px]",
                    isActive
                      ? 'font-bold text-[#003314]'
                      : 'font-normal text-[rgba(104,93,69,0.7)] hover:text-[#006e12]',
                  )
                }
              >
                Saved
              </NavLink>
              <NavLink
                to="/recent"
                className={({ isActive }) =>
                  cn(
                    "shrink-0 whitespace-nowrap font-['Inter',sans-serif] text-[16px] not-italic leading-[10px] tracking-[-0.35px]",
                    isActive
                      ? 'font-bold text-[#003314]'
                      : 'font-normal text-[#938c7b] hover:text-[#006e12]',
                  )
                }
              >
                Recent
              </NavLink>
              <NavLink
                to="/auth/login"
                className="inline-flex h-[31px] min-w-[125px] shrink-0 items-center justify-center rounded-[10px] bg-[#006e12] px-4 font-['Manrope:Medium',sans-serif] text-[14px] font-medium leading-[20px] text-white hover:opacity-95"
              >
                Signin / Signup
              </NavLink>
              <div className="size-[24px] shrink-0 overflow-clip">
                <div className="relative size-full">
                  <IconProfile className="absolute inset-0 block size-full text-[#1a1c19]" />
                </div>
              </div>
            </nav>
          </div>

          <form
            className="absolute left-1/2 top-[100px] flex -translate-x-1/2 items-center justify-center gap-[24px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative h-[53px] w-[395px] rounded-[12px] border border-black bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute left-[37px] top-1/2 size-[24px] -translate-y-1/2">
                <IconMyLocation className="absolute inset-0 block size-full text-black opacity-90" />
              </div>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                aria-label="Location"
                className="absolute left-[74px] top-1/2 w-[300px] -translate-y-1/2 bg-transparent font-['Inter:Light',sans-serif] text-[16px] font-light not-italic text-black opacity-63 outline-none"
              />
            </div>

            <div className="relative h-[53px] w-[607px] rounded-[12px] border border-[#003326] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="absolute left-[28px] top-1/2 size-[24px] -translate-y-1/2">
                <IconSearchRounded className="absolute inset-0 block size-full text-[#1a1c19] opacity-90" />
              </div>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="How we can help you today?"
                aria-label="Search"
                className="absolute left-[59px] top-1/2 w-[520px] -translate-y-1/2 bg-transparent font-['Inter:Light',sans-serif] text-[16px] font-light not-italic text-[#6b7280] outline-none"
              />
            </div>

            <button
              type="submit"
              className="flex h-[53px] w-[125px] items-center justify-center rounded-[16px] bg-[#006e12] px-[32px] py-[16px]"
            >
              <span className="font-['Liberation_Sans:Bold',sans-serif] text-[16px] font-bold not-italic leading-[24px] text-white">
                Search
              </span>
            </button>
          </form>
        </div>
      </div>
    </header>
  )
})

