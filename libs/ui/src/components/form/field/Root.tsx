import React from "react";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";

import { CreateFormContext } from "../context";

interface RootProps extends ComponentPropsWithRef<"div">, PropsWithChildren {
	name: string;
}

export const Root = React.forwardRef<HTMLDivElement, RootProps>(
	({ name, children }, ref) => {
		return (
			<CreateFormContext.Provider value={{ name }}>
				<div className="my-4" ref={ref}>
					{children}
				</div>
			</CreateFormContext.Provider>
		);
	},
);
