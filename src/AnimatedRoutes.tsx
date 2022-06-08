import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Portoflio } from "./pages/Portfolio";
import PDFViewer from "./components/PDFViewer";

import { AnimatePresence } from "framer-motion";

export const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<>
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/*" element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/experience" element={<Experience />} />
					<Route path="/portfolio" element={<Portoflio />} />
					<Route path="/cv" element={<PDFViewer pdf={"cv.pdf"} />} />
				</Routes>
			</AnimatePresence>
		</>
	);
};
