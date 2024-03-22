import React from "react";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";

import { useFormContext } from "../context/hooks";

interface RootProps extends ComponentPropsWithRef<"label">, PropsWithChildren {}

export const Root = React.forwardRef<HTMLLabelElement, RootProps>(
	({ children }, ref) => {
		const { name } = useFormContext();

		return (
			<label
				ref={ref}
				htmlFor={name}
				className="block mb-2 text-sm font-medium text-gray-900"
			>
				{children}
			</label>
		);
	},
);
