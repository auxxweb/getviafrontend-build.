import { memo } from 'react'

export const Card = memo(function Card({
  as: Comp = 'div',
  hover = true,
  className = '',
  children,
  ...rest
}) {
  return (
    <Comp
      className={`ds-card ${hover ? 'ds-card-hover' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  )
})

