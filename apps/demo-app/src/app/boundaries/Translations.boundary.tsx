import type { PropsWithChildren } from "react";

import { registerTranslations } from "@core/helpers";
import { useTranslationsDocumentAttribute } from "@core/hooks";

import { en as translationEN } from "../../assets/translations/en.json";
import { ar as translationAR } from "../../assets/translations/ar.json";

registerTranslations({ en: translationEN, ar: translationAR });

interface TranslationsBoundary extends PropsWithChildren {}

export const TranslationsBoundary: React.FC<TranslationsBoundary> = ({
	children,
}) => {
	useTranslationsDocumentAttribute();

	return children;
};
