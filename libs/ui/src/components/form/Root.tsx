import React from 'react';
import type { ComponentPropsWithRef, PropsWithChildren } from 'react';

interface RootProps extends ComponentPropsWithRef<'form'>, PropsWithChildren {}

export const Root = React.forwardRef<HTMLFormElement, RootProps>(({ title, children, ...rest }, ref) => {
  return (
    <form ref={ref} {...rest}>
      <h2 className="my-4 text-2xl font-bold text-gray-900 md:text-3xl">{title}</h2>
      {children}
      test
    </form>
  );
});
