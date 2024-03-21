import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import type { AppLang } from "@core/types";
import clsx from "clsx";

interface RootProps
	extends PropsWithChildren,
		ComponentPropsWithoutRef<"select"> {
	defaultValue: AppLang;
	onValueChange?: (value: string) => void;
}

export const Root: React.FC<RootProps> = ({
	children,
	defaultValue,
	className,
	onValueChange,
}) => (
	<Select.Root defaultValue={defaultValue} onValueChange={onValueChange}>
		<Select.Trigger
			className={clsx(
				className,
				"inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none",
			)}
			aria-label="Food"
		>
			<Select.Value />
			<Select.Icon className="text-violet11">
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content
				position="popper"
				className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
			>
				<Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className="p-[5px]">{children}</Select.Viewport>
				<Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
);
