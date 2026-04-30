import { memo } from 'react'

export const SvgIcon = memo(function SvgIcon({ children, className = '', viewBox = '0 0 24 24' }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
})

