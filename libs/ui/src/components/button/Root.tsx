import clsx from "clsx";
import React from "react";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";

interface RootProps
	extends ComponentPropsWithRef<"button">,
		PropsWithChildren {}

export const Root = React.forwardRef<HTMLButtonElement, RootProps>(
	({ type, className, children }, ref) => {
		return (
			<button
				ref={ref}
				type={type || "button"}
				className={clsx(
					className,
					"focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none w-full",
				)}
			>
				{children}
			</button>
		);
	},
);
