import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppDir } from "../types";

export const useDir = () => {
	const { i18n } = useTranslation();
	const [direction, setDirection] = useState(document.documentElement.dir);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		i18next.on("languageChanged", (lang) => {
			setDirection(i18n.dir(lang));
		});
	}, []);

	return { direction, isRtl: direction === AppDir.RTL };
};
