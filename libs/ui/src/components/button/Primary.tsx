import React from 'react'
import type { ComponentPropsWithRef, PropsWithChildren } from 'react'

import { Root as Button } from './Root'

interface PrimaryProps extends ComponentPropsWithRef<'button'>, PropsWithChildren {}

export const Primary = React.forwardRef<HTMLButtonElement, PrimaryProps>(({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props} className="text-white bg-blue-700 hover:bg-blue-800">
      {children}
    </Button>
  )
})
