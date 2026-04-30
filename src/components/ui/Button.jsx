import { memo } from 'react'
import { Link } from 'react-router-dom'

export const Button = memo(function Button({
  as = 'button',
  to,
  href,
  variant = 'primary',
  size = 'md',
  unstyled = false,
  className = '',
  children,
  ...rest
}) {
  const base =
    'inline-flex items-center justify-center rounded-btn font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-60 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-brand-700 text-white hover:bg-brand-800',
    secondary:
      'bg-white text-brand-700 ring-1 ring-black/10 hover:bg-brand-50',
    ghost: 'bg-transparent text-brand-700 hover:bg-brand-50',
    dark: 'bg-ink text-white hover:bg-black',
  }
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-10 px-5 text-sm',
    lg: 'h-11 px-6 text-[15px]',
  }

  const cls = unstyled
    ? className
    : `${base} ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${className}`

  if (as === 'link') {
    return (
      <Link to={to ?? '/'} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a href={href ?? '#'} className={cls} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
})

