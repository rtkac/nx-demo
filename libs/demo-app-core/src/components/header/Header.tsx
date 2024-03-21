import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { AppLang } from "@core/types";
import { changeLanguage } from "@core/helpers";

import * as fromNav from "@demo-app-core/navigation";

import { Navigation, Select } from "@ui/components";

export const CoreHeader: React.FC = () => {
	const { t } = useTranslation();

	const currentLanguage = useMemo(() => i18next.language as AppLang, []);

	const handleChange = (lang: string): void => {
		changeLanguage(lang as AppLang);
	};

	return (
		<Navigation.Root>
			<Select.Root
				onValueChange={handleChange}
				defaultValue={currentLanguage}
				className="md:mb-0 mb-4"
			>
				<Select.Item value={AppLang.EN}>{t("lang.en")}</Select.Item>
				<Select.Item value={AppLang.AR}>{t("lang.ar")}</Select.Item>
			</Select.Root>
			<Navigation.Item link={fromNav.DASHBOARD}>
				{t("navigation.home")}
			</Navigation.Item>
			<Navigation.Item link={fromNav.FORM}>
				{t("navigation.form")}
			</Navigation.Item>
			<Navigation.Item link={fromNav.SOMETHING}>
				{t("navigation.something")}
			</Navigation.Item>
		</Navigation.Root>
	);
};
