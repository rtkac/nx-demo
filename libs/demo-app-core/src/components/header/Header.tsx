import { APP_LANG } from "@core/types";
import * as fromNav from "@demo-app-core/navigation";
import { Navigation, Select } from "@ui/components";

export const CoreHeader: React.FC = () => {
	return (
		<Navigation.Root>
			<Select.Root defaultValue={APP_LANG.EN} className="md:mb-0 mb-4">
				<Select.Item value={APP_LANG.EN}>{APP_LANG.EN}</Select.Item>
				<Select.Item value={APP_LANG.AR}>{APP_LANG.AR}</Select.Item>
			</Select.Root>
			<Navigation.Item link={fromNav.DASHBOARD}>Home</Navigation.Item>
			<Navigation.Item link={fromNav.FORM}>Form</Navigation.Item>
		</Navigation.Root>
	);
};
