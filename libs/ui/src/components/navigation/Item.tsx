import clsx from "clsx";
import type { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface ItemProps extends PropsWithChildren {
	link: string;
}

export const Item: React.FC<ItemProps> = ({ link, children }) => {
	const activeClass =
		"text-white bg-blue-700 md:dark:text-blue-500 md:text-blue-700";

	return (
		<li className="flex items-center">
			<NavLink
				to={link}
				className={({ isActive }) =>
					clsx(
						isActive && activeClass,
						"block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white w-full",
					)
				}
			>
				{children}
			</NavLink>
		</li>
	);
};
