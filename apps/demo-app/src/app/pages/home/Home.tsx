import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div>
			<p className="text-md font-normal text-gray-500 lg:text-lg">
				{t("home.paragraph")}
			</p>
			<br />
			<p className="text-md font-normal text-gray-500 lg:text-lg">
				{t("home.paragraph")}
			</p>
		</div>
	);
};
