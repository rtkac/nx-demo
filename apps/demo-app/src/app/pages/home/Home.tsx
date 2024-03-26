import { useTranslation } from "react-i18next";

export const Home: React.FC = () => {
	const { t } = useTranslation();

	return (
		<>
			<div>
				<p className="text-md font-normal text-gray-500 lg:text-lg">
					{t("home.paragraph")}
				</p>
				<br />
				<p className="text-md font-normal text-gray-500 lg:text-lg">
					{t("home.paragraph")}
				</p>
			</div>
			<div className="w-full my-10">
				<div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
					<div className="rounded-lg shadow-lg bg-violet-100 h-40 rtl:bg-mauve12" />
					<div className="rounded-lg shadow-lg bg-violet-200 h-40" />
					<div className="rounded-lg shadow-lg bg-violet-300 h-40" />
					<div className="rounded-lg shadow-lg bg-violet-400 h-40" />
				</div>
			</div>
		</>
	);
};
