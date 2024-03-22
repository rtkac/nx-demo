import React from "react";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";

import { Root as Button } from "./Root";

interface SecondaryProps
	extends ComponentPropsWithRef<"button">,
		PropsWithChildren {}

export const Secondary = React.forwardRef<HTMLButtonElement, SecondaryProps>(
	({ children, ...props }, ref) => {
		return (
			<Button
				ref={ref}
				{...props}
				className="text-white hover:bg-violet-800 bg-violet-700"
			>
				{children}
			</Button>
		);
	},
);
