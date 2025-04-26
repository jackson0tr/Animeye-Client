import React, { PropsWithChildren } from "react";
import { Navbar } from "../organisms/navbar";


const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="w-full overflow-x-hidden">
			{/* <Navbar /> */}
			{children}
		</div>
	);
};

export default MainLayout;