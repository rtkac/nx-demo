import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as SelectPrimitive from '@radix-ui/react-select'
import type { ComponentPropsWithRef, PropsWithChildren } from 'react'

import type { AppLang } from '@core/types'
import clsx from 'clsx'
import React from 'react'

interface RootProps extends PropsWithChildren, ComponentPropsWithRef<'select'> {
  defaultValue: AppLang
  onValueChange?: (value: string) => void
}
export const Root = React.forwardRef<HTMLButtonElement, RootProps>(
  ({ defaultValue, className, onValueChange, children }, ref) => {
    return (
      <SelectPrimitive.Root defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectPrimitive.Trigger
          ref={ref}
          className={clsx(
            className,
            'inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none',
          )}
        >
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="text-violet11">
            <ChevronDownIcon />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
        <SelectPrimitive.Portal>
          <SelectPrimitive.Content
            position="popper"
            className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
          >
            <SelectPrimitive.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </SelectPrimitive.ScrollUpButton>
            <SelectPrimitive.Viewport className="p-[5px]">{children}</SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronDownIcon />
            </SelectPrimitive.ScrollDownButton>
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    )
  },
)
