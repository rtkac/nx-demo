import { render } from "@testing-library/react";

import AppEntry from "./AppEntry";

describe("App", () => {
	it("should render successfully", () => {
		const { baseElement } = render(<AppEntry />);
		expect(baseElement).toBeTruthy();
	});
});
