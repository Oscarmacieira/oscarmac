import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useBetween } from "use-between";
import { TerminalContext } from "../../hooks/useTerminalLog";
import { TerminalInput, TerminalStyle } from "./style";

export const Terminal = () => {
	const navigate = useNavigate();

	const { sendCommand, output, input, setOutput, setInput } =
		useContext(TerminalContext);
	const { pathname } = useLocation();
	const inputRef: any = useRef();
	const terminalRef: any = useRef();
	const bottomRef: any = useRef();
	const [isFixed, setIsFixed] = useState(false);
	const [terminalOutput, setTerminalOutput] = useState(output);
	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		const y = bottomRef.current?.offsetTop + inputRef.current?.clientHeight;
		setIsFixed(y + 20 >= window.innerHeight ? true : false);
		terminalRef.current?.scrollTo({
			top: bottomRef.current?.offsetTop + 80,
			behavior: "smooth",
		});
	}, [output]);

	return (
		<TerminalStyle
			ref={terminalRef}
			style={{ paddingBottom: isFixed ? 40 : 0 }}
			onClick={() => inputRef.current?.focus()}
		>
			{output}
			<div ref={bottomRef} />

			<TerminalInput
				style={{
					position: isFixed ? "fixed" : "relative",
					bottom: isFixed ? "0px" : "initial",
				}}
			>
				<p style={{ width: "fit-content", display: "flex", gap: 10 }}>
					<span>{pathname}</span>
					{` > `}
				</p>
				<input
					autoCapitalize="none"
					ref={inputRef}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					type="text-area"
					onKeyDown={(e) => sendCommand(e)}
				/>
			</TerminalInput>
		</TerminalStyle>
	);
};
