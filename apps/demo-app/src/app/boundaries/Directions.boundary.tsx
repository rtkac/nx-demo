import { DirectionProvider } from "@radix-ui/react-direction";
import { type PropsWithChildren, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface DirectionsBoundaryProps extends PropsWithChildren {}

export const DirectionsBoundary: React.FC<DirectionsBoundaryProps> = ({
	children,
}) => {
	const { i18n } = useTranslation();

	const direction = useMemo(() => {
		return i18n.dir(i18n.resolvedLanguage);
	}, [i18n, i18n.resolvedLanguage]);

	return <DirectionProvider dir={direction}>{children}</DirectionProvider>;
};
