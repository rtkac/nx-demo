import i18n, { type Resource } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { AppLang } from "../types";

export const registerTranslations = (resources: Resource): void => {
	i18n
		.use(LanguageDetector)
		.use(initReactI18next)
		.init({
			supportedLngs: [AppLang.EN, AppLang.AR],
			resources,
			keySeparator: false,
			interpolation: {
				escapeValue: false,
			},
		});
};

export const changeLanguage = (lang: AppLang): void => {
	i18n.changeLanguage(lang);
};
