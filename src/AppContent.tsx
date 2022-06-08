import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "./theme/theme";
import { useState, useContext } from "react";
import { Navbar } from "./layout/Navbar";
import ScrollToTop from "./layout/interface/ScrollToTop";
import { Terminal } from "./pages/Terminal";
import { TerminalContextProvider } from "./hooks/useTerminalLog";
import { ParticleBackground } from "./anim/ParticleAnim/ParticleBackground";
import { TerminalContext } from "./hooks/useTerminalLog";
import { AnimatedRoutes } from "./AnimatedRoutes";
export const AppContent = () => {
	const { isClose, isCollapse } = useContext(TerminalContext);
	return (
		<>
			{" "}
			<Terminal />{" "}
			<div
				className="main-container"
				style={{
					marginRight: isClose || isCollapse ? "0px" : "",
					marginBottom: isClose || isCollapse ? "0px" : "",
				}}
			>
				<Navbar />
				<AnimatedRoutes />{" "}
			</div>{" "}
		</>
	);
};
