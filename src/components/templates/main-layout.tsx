import React, { PropsWithChildren } from "react";
import { Navbar } from "../organisms/layout/navbar";
import Footer from "../organisms/layout/footer";


const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full overflow-x-hidden overflow-y-auto">
			<Navbar />
			{children}
			<Footer/>
		</div>
	);
};

export default MainLayout;