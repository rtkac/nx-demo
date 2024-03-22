import React from "react";
import type { ComponentPropsWithRef } from "react";
import { useFormContext } from "../context/hooks";

interface RootProps extends ComponentPropsWithRef<"input"> {}
type ModifiedRootProps = Omit<RootProps, "name">;

export const Root = React.forwardRef<HTMLInputElement, ModifiedRootProps>(
	(props, ref) => {
		const { name } = useFormContext();

		// props

		return (
			<input
				ref={ref}
				type={props.type || "text"}
				id={name}
				name={name}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={props.placeholder}
			/>
		);
	},
);
