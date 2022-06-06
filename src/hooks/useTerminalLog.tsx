import React, { createContext, useEffect, useState } from "react";

import { useLocation, useNavigate } from "react-router";
export const TerminalContext = createContext<any>(null!);

export const TerminalContextProvider = ({ children: children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");
	const sendCommand = (e: any) => {
		if (e.key === "Enter") {
			let newOutput = "";
			newOutput = output + "\n" + "> " + input;
			let inputArray = input.split(" ");
			const isHomeDir = pathname === "/";
			switch (inputArray[0]) {
				case "ls":
					switch (pathname) {
						case "/":
							if (inputArray[1] === "-l") {
								newOutput += `\nskills\nexperience\ncontact`;
							} else {
								newOutput += `\nskills experience contact`;
							}
							break;
						case "/skills":
							newOutput += ``;
							break;
					}
					break;
				case "clear":
					newOutput = "";
					break;
				case "cd":
					switch (inputArray[1]) {
						case isHomeDir ? "skills" : "../skills":
							navigate("/skills");
							break;
						case isHomeDir ? "experience" : "../experience":
							navigate("/experience");
							break;
						case isHomeDir ? "contact" : "../contact":
							navigate("/contact");
							break;
						case "/":
							navigate("/");
							break;
						case "..":
							navigate("/");
							break;

						default:
							newOutput += `\nno such file or repository: ${inputArray[1]}`;
							break;
					}
					break;
				case "pwd":
					newOutput += `\n${pathname}`;
					break;
				default:
					newOutput += `\ncommand not found: ${inputArray[0]}`;
			}
			setOutput(newOutput + "\n");
			setInput("");
		}
	};

	const printToConsole = (data: string) => {
		setOutput(output + "\n" + data + "\n");
		setInput("");
		console.log(output);
	};
	const value = {
		input,
		output,
		setInput,
		setOutput,
		sendCommand,
		printToConsole,
	};
	useEffect(() => console.log(output), [output]);
	return (
		<TerminalContext.Provider value={value}>
			{children}
		</TerminalContext.Provider>
	);
};
