import { CheckIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'
import clsx from 'clsx'
import React, { type PropsWithChildren } from 'react'

interface ItemProps extends PropsWithChildren, Select.SelectItemProps {}

export const Item = React.forwardRef<HTMLDivElement, ItemProps>(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className={clsx(
        'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[35px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
        className,
      )}
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 rtl:right-0 w-[25px] inline-flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  )
})
