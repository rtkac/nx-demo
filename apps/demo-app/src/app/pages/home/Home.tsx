import { useTranslation } from "react-i18next";

export const Home = () => {
	const { t } = useTranslation();

	return (
		<div>
			<p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
				{t("home.paragraph")}
			</p>
		</div>
	);
};
