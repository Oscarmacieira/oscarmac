import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import themes from "./theme/schema";
import { storage } from "./utils/storage";

const Index = () => {
	storage.set("themes", themes);
	return <App />;
};

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Index />
	</React.StrictMode>
);
