import React, { PropsWithChildren } from "react";

import { useAppSelector } from "@demo-app-core/redux";

interface OutageBoundaryProps extends PropsWithChildren {}

export const OutageBoundary: React.FC<OutageBoundaryProps> = ({ children }) => {
	const outageState = useAppSelector((state) => state.rootReducer.outage);

	if (outageState.isOutage) {
		return (
			<p className="text-center py-10 text-lg font-semibold">
				{outageState.message}
			</p>
		);
	}

	return children;
};
