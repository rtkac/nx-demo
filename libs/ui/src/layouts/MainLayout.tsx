import { Outlet } from "react-router-dom";

import { Header } from "../components/header/Header";

import { ReactComponent as Logo } from "../images/nx_logo.svg";

export const MainLayout: React.FC = () => {
	return (
		<div>
			<Header logo={Logo} />
			<Outlet />
		</div>
	);
};
