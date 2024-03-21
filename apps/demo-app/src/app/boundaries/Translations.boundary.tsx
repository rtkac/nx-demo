import type React from "react";
import { useEffect, type PropsWithChildren } from "react";

import { registerTranslations } from "@core/helpers";

interface TranslationsBoundary extends PropsWithChildren {}

export const TranslationsBoundary: React.FC<TranslationsBoundary> = ({
	children,
}) => {
	registerTranslations();

	return children;
};
