import { memo } from 'react'
import { cn } from '../../utils/cn.js'

export const Section = memo(function Section({
  as: Comp = 'section',
  className = '',
  innerClassName = '',
  children,
  ...rest
}) {
  return (
    <Comp className={cn('bg-paper', className)} {...rest}>
      <div className={cn('container-page', innerClassName)}>{children}</div>
    </Comp>
  )
})

