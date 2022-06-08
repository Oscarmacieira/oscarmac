import { ThemeProvider } from "styled-components";
import { AppStyles } from "./AppStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import themes from "./theme/schema";
import { useTheme } from "./theme/theme";
import { useState, useContext } from "react";
import ScrollToTop from "./layout/interface/ScrollToTop";
import { TerminalContextProvider } from "./hooks/useTerminalLog";
import { AppContent } from "./AppContent";
import { ParticleBackground } from "./anim/ParticleAnim/ParticleBackground";
function App() {
	const { theme, themeLoaded } = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
	if (!themeLoaded) return <></>;

	const changeTheme = () => {
		selectedTheme.name === "Light"
			? setSelectedTheme(themes.data.dark)
			: setSelectedTheme(themes.data.light);
	};
	return (
		<ThemeProvider theme={selectedTheme}>
			<AppStyles />
			<Router>
				<ScrollToTop />
				<ParticleBackground />
				<TerminalContextProvider>
					<AppContent />{" "}
				</TerminalContextProvider>{" "}
			</Router>
		</ThemeProvider>
	);
}

export default App;
