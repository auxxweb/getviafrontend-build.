import { memo } from 'react'
import { IconFacebook, IconInstagram, IconX } from '../ui/Icons.jsx'

export const Footer = memo(function Footer() {
  // Normalized copy of Home.jsx's footer: exact sizes/styles, offsets reset to start at 0
  return (
    <footer className="bg-[#fbf9ee]">
      {/* Mobile / tablet footer */}
      <div className="lg:hidden">
        <div className="container-page py-10">
          <div className="grid gap-8">
            <div>
              <img
                src="/getvia-logo.png"
                alt="Getvia"
                className="h-[28px] w-auto object-contain"
                loading="lazy"
              />
              <p className="mt-3 max-w-[46ch] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-[22.75px] text-[#3d4a39]">
                Building the architectural future for entrepreneurs with verified
                services and premium business growth tools.
              </p>
              <div className="mt-4 flex items-start gap-[16px]">
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative size-[15px]">
                    <IconInstagram className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative h-[15px] w-[13.5px]">
                    <IconFacebook className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative h-[12px] w-[15px]">
                    <IconX className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[22.75px] text-[#1a1c19]">
                  Explore
                </p>
                <div className="mt-3 grid gap-[12px]">
                  {['About Getvia', 'Industry Categories', 'Growth Hub'].map((t) => (
                    <p
                      key={t}
                      className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-[22.75px] text-[#3d4a39]"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[22.75px] text-[#1a1c19]">
                  Services
                </p>
                <div className="mt-3 grid gap-[12px]">
                  {['Dental Solutions', 'Salon Growth', 'Resort Marketing'].map((t) => (
                    <p
                      key={t}
                      className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-[22.75px] text-[#3d4a39]"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[22.75px] text-[#1a1c19]">
                  Support
                </p>
                <div className="mt-3 grid gap-[12px]">
                  {['Contact Support', 'Help Center', 'List Business'].map((t) => (
                    <p
                      key={t}
                      className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-[22.75px] text-[#3d4a39]"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[22.75px] text-[#1a1c19]">
                  Legal
                </p>
                <div className="mt-3 grid gap-[12px]">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
                    <p
                      key={t}
                      className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] leading-[22.75px] text-[#3d4a39]"
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#75b226] py-4">
          <div className="container-page text-center font-['Inter:Regular',sans-serif] text-[16px] leading-[20px] text-white">
            Copyright © 2026 Auxxbay. All Rights Reserved.
          </div>
        </div>
      </div>

      {/* Desktop footer (keep exact layout) */}
      <div className="mx-auto hidden w-full max-w-[1440px] lg:block">
        <div className="relative h-[338px] w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-[283px] w-full bg-[#fbf9ee]" />

          <div className="-translate-x-1/2 absolute left-1/2 top-[93px] grid w-[1280px] max-w-[1280px] grid-cols-[repeat(6,minmax(0,1fr))] grid-rows-[_176.25px] gap-x-[32px] gap-y-[32px] px-[32px]">
            <div className="col-[1/span_2] flex flex-col items-start justify-self-stretch gap-[15.3px] self-start">
              <div className="flex w-full flex-col items-start">
              <div className="flex w-full flex-col justify-center">
                <img
                  src="/getvia-logo.png"
                  alt="Getvia"
                  className="h-[28px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
              </div>

              <div className="flex w-[320px] max-w-[320px] flex-col items-start">
                <div className="flex flex-col justify-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] font-normal leading-[0] text-[#3d4a39]">
                  <p className="mb-0 leading-[22.75px]">
                    Building the architectural future for
                  </p>
                  <p className="mb-0 leading-[22.75px]">
                    entrepreneurs with verified services and
                  </p>
                  <p className="leading-[22.75px]">
                    premium business growth tools.
                  </p>
                </div>
              </div>

              <div className="flex w-full items-start gap-[16px] pt-[8.7px]">
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative size-[15px]">
                    <IconInstagram className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative h-[15px] w-[13.5px]">
                    <IconFacebook className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
                <div className="flex size-[40px] items-center justify-center rounded-[9999px] bg-[#e3e3de]">
                  <div className="relative h-[12px] w-[15px]">
                    <IconX className="absolute inset-0 block size-full text-[#1a1c19]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-3 flex flex-col items-start justify-self-stretch gap-[16px] pb-[45.25px] self-start">
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[0] text-[#1a1c19]">
                  <p className="leading-[22.75px]">Explore</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {['About Getvia', 'Industry Categories', 'Growth Hub'].map((t) => (
                  <div key={t} className="flex w-full flex-col items-start">
                    <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] font-normal leading-[0] text-[#3d4a39]">
                      <p className="leading-[22.75px]">{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-4 flex flex-col items-start justify-self-stretch gap-[16px] pb-[45.25px] self-start">
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[0] text-[#1a1c19]">
                  <p className="leading-[22.75px]">Services</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {['Dental Solutions', 'Salon Growth', 'Resort Marketing'].map((t) => (
                  <div key={t} className="flex w-full flex-col items-start">
                    <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] font-normal leading-[0] text-[#3d4a39]">
                      <p className="leading-[22.75px]">{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-5 flex flex-col items-start justify-self-stretch gap-[16px] pb-[45.25px] self-start">
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[0] text-[#1a1c19]">
                  <p className="leading-[22.75px]">Support</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {['Contact Support', 'Help Center', 'List Business'].map((t) => (
                  <div key={t} className="flex w-full flex-col items-start">
                    <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] font-normal leading-[0] text-[#3d4a39]">
                      <p className="leading-[22.75px]">{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-6 flex flex-col items-start justify-self-stretch gap-[16px] pb-[45.25px] self-start">
              <div className="flex w-full flex-col items-start">
                <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Bold',sans-serif] text-[14px] font-bold leading-[0] text-[#1a1c19]">
                  <p className="leading-[22.75px]">Legal</p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-[12px]">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((t) => (
                  <div key={t} className="flex w-full flex-col items-start">
                    <div className="flex w-full flex-col justify-center font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] font-normal leading-[0] text-[#3d4a39]">
                      <p className="leading-[22.75px]">{t}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-[283px] h-[55px] w-full bg-[#75b226]" />
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-[310px] flex flex-col justify-center font-['Inter:Regular',sans-serif] text-[16px] font-normal not-italic leading-[0] text-center text-white">
            <p className="leading-[20px]">
              Copyright © 2026 Auxxbay. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
})

