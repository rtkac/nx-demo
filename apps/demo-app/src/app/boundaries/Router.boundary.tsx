import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "@ui/layouts";
import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/not-found/NotFound";

export const RouterBoundary: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
