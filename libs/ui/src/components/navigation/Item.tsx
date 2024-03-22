import clsx from "clsx";
import type { ComponentPropsWithRef, PropsWithChildren } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

interface ItemProps extends ComponentPropsWithRef<"li">, PropsWithChildren {
	link: string;
}

export const Item = React.forwardRef<HTMLLIElement, ItemProps>(
	({ link, children }, ref) => {
		const activeClass = "text-white bg-blue-700 md:text-blue-700";

		return (
			<li ref={ref} className="flex items-center">
				<NavLink
					to={link}
					className={({ isActive }) =>
						clsx(
							isActive && activeClass,
							"block py-2 px-3 rounded md:bg-transparent md:p-0 w-full",
						)
					}
				>
					{children}
				</NavLink>
			</li>
		);
	},
);
