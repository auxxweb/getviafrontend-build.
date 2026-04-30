import { memo } from 'react'

export const Input = memo(function Input({
  className = '',
  inputClassName = '',
  leftIcon,
  rightIcon,
  ...props
}) {
  return (
    <div className={`relative ${className}`}>
      {leftIcon ? (
        <div className="pointer-events-none absolute left-0 top-0 grid h-full place-items-center">
          {leftIcon}
        </div>
      ) : null}
      <input
        {...props}
        className={inputClassName}
      />
      {rightIcon ? (
        <div className="pointer-events-none absolute right-0 top-0 grid h-full place-items-center">
          {rightIcon}
        </div>
      ) : null}
    </div>
  )
})

