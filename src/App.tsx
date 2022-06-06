import { ThemeProvider } from "styled-components";
import { AppStyles } from "./AppStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import themes from "./theme/schema";
import { useTheme } from "./theme/theme";
import { useState } from "react";
import { Home } from "./pages/Home";
import { Navbar } from "./layout/Navbar";
import ScrollToTop from "./layout/interface/ScrollToTop";
import { Skills } from "./pages/Skills";
import { Terminal } from "./pages/Terminal";
import { TerminalContextProvider } from "./hooks/useTerminalLog";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
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
				<TerminalContextProvider>
					{" "}
					<Terminal />{" "}
					<div className="main-container">
						<Navbar />
						<Routes>
							<Route path="/*" element={<Home />} />
							<Route path="/" element={<Home />} />
							<Route path="/skills" element={<Skills />} />
							<Route path="/contact" element={<Contact />} />
							<Route path="/experience" element={<Experience />} />
						</Routes>
					</div>{" "}
				</TerminalContextProvider>{" "}
			</Router>
		</ThemeProvider>
	);
}

export default App;
