import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const resources = {
	en: {
		translation: {
			"test.key": "test key value",
		},
	},
	ar: {
		translation: {
			"test.key": "arabic key value",
		},
	},
};

export const registerTranslations = () => {
	return i18n.use(initReactI18next).init({
		lng: "auto",
		fallbackLng: "en",
		resources,
		keySeparator: false,
		interpolation: {
			escapeValue: false,
		},
	});
};
