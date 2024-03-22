import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CoreHeader } from "@demo-app-core/components";
import * as fromNav from "@demo-app-core/navigation";

import { MainLayout } from "@ui/layouts";

import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/not-found/NotFound";

export const RouterBoundary: React.FC = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MainLayout coreHeader={<CoreHeader />} />,
			children: [
				{
					path: fromNav.DASHBOARD,
					element: <Home />,
				},
				{
					path: fromNav.FORM,
					element: <p>TODO</p>, // TODO
				},
				{
					path: fromNav.NOT_FOUND,
					element: <NotFound />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};
