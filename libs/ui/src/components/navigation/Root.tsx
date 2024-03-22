import React from "react";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

import { Logo } from "@ui/images";

interface RootProps extends ComponentPropsWithRef<"nav">, PropsWithChildren {}

export const Root = React.forwardRef<HTMLElement, RootProps>(
	({ children }, ref) => {
		return (
			<nav ref={ref} className="bg-white border-gray-200 border-b">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<NavLink
						to="/"
						className="flex items-center space-x-3 rtl:space-x-reverse"
					>
						<Logo title="NX monorepo" className="md:w-24 md:h-24 w-14 h-14" />
					</NavLink>
					<div className="w-full md:w-auto">
						<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
							{children}
						</ul>
					</div>
				</div>
			</nav>
		);
	},
);
