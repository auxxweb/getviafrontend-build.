import { memo } from 'react'

function Svg({ className, viewBox, children, ...props }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

// material-symbols:search-rounded (filled)
export const IconSearchRounded = memo(function IconSearchRounded({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M9.5 3a6.5 6.5 0 1 1 4.03 11.6l4.44 4.44a1 1 0 0 1-1.42 1.42l-4.44-4.44A6.5 6.5 0 0 1 9.5 3Zm0 2a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9Z" />
    </Svg>
  )
})

// mdi:my-location
export const IconMyLocation = memo(function IconMyLocation({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8Zm8.94 3A9.02 9.02 0 0 0 13 3.06V1h-2v2.06A9.02 9.02 0 0 0 3.06 11H1v2h2.06A9.02 9.02 0 0 0 11 20.94V23h2v-2.06A9.02 9.02 0 0 0 20.94 13H23v-2h-2.06ZM12 19a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z" />
    </Svg>
  )
})

// css.gg profile
export const IconProfile = memo(function IconProfile({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 12a4 4 0 1 0-4-4a4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </Svg>
  )
})

export const IconFacebook = memo(function IconFacebook({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M13 22v-8h3l1-4h-4V7.5C13 6.67 13.17 6 14.5 6H17V2.2C16.45 2.13 15.24 2 13.84 2C10.92 2 9 3.78 9 7V10H6v4h3v8h4Z" />
    </Svg>
  )
})

export const IconInstagram = memo(function IconInstagram({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm-5 4.5A5.5 5.5 0 1 1 6.5 12A5.51 5.51 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 14A3.5 3.5 0 0 0 12 10.5ZM18 6.8a1.2 1.2 0 1 1-1.2 1.2A1.2 1.2 0 0 1 18 6.8Z" />
    </Svg>
  )
})

export const IconX = memo(function IconX({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M18.9 2H22l-6.78 7.74L23 22h-6.2l-4.86-6.33L6.4 22H2l7.33-8.36L1 2h6.35l4.4 5.8L18.9 2Zm-1.1 18h1.72L6.26 3.9H4.4l13.4 16.1Z" />
    </Svg>
  )
})

// Categories chip icons (simple, monochrome; sized via className)
export const IconChipHealth = memo(function IconChipHealth({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M11 4h2v4h4v2h-4v4h-2v-4H7V8h4V4Z" />
      <path d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10Zm0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16Z" />
    </Svg>
  )
})

export const IconChipBeauty = memo(function IconChipBeauty({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v6a2 2 0 1 0 4 0V6a2 2 0 0 0-2-2Z" />
      <path d="M8 14h8v2H8v-2Zm-1 4h10v2H7v-2Z" />
    </Svg>
  )
})

export const IconChipHomeLiving = memo(function IconChipHomeLiving({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 3l9 8h-3v10h-5v-6H11v6H6V11H3l9-8Zm0 2.7L6 11v8h3v-6h6v6h3v-8l-6-5.3Z" />
    </Svg>
  )
})

export const IconChipRealEstate = memo(function IconChipRealEstate({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 3l9 8h-3v10H6V11H3l9-8Zm0 2.7L6 11v8h12v-8l-6-5.3Z" />
      <path d="M9 12h6v2H9v-2Zm0 4h6v2H9v-2Z" />
    </Svg>
  )
})

export const IconChipAuto = memo(function IconChipAuto({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M5 11l1.2-3.6A3 3 0 0 1 9.04 5h5.92a3 3 0 0 1 2.84 2.4L19 11v7h-2v-2H7v2H5v-7Zm3.9-4a1 1 0 0 0-.95.68L7.3 9h9.4l-.65-1.32A1 1 0 0 0 15.1 7H8.9Z" />
      <path d="M7.5 15a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Z" />
    </Svg>
  )
})

export const IconChipFood = memo(function IconChipFood({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M6 2h2v8a3 3 0 0 1-3 3H4V2h2v8a1 1 0 0 0 0-8Z" />
      <path d="M10 2h2v9a2 2 0 0 1-2 2h-1V2h1Zm9 0h1v12h-2V9h-2V7h2V2Z" />
      <path d="M6 15h14v2H6v-2Zm2 3h10v2H8v-2Z" />
    </Svg>
  )
})

export const IconChipTravel = memo(function IconChipTravel({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M2.5 19.5l19-7.5l-19-7.5L9 11h4l8.5-3.5L13 12l8.5 4.5L13 13H9l-6.5 6.5Z" />
    </Svg>
  )
})

export const IconBolt = memo(function IconBolt({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M13 2L3 14h7l-1 8l12-14h-7l-1-6Z" />
    </Svg>
  )
})

export const IconStar = memo(function IconStar({ className }) {
  return (
    <Svg className={className} viewBox="0 0 24 24">
      <path d="M12 2.5l2.99 6.22l6.86.62l-5.19 4.54l1.56 6.69L12 17.77l-6.22 3.8l1.56-6.69L2.15 9.34l6.86-.62L12 2.5Z" />
    </Svg>
  )
})

export const IconBookmark = memo(function IconBookmark({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 3h10a2 2 0 0 1 2 2v16l-7-4l-7 4V5a2 2 0 0 1 2-2Z" />
    </svg>
  )
})

