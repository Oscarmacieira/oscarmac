import { useContext, useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useBetween } from "use-between";
import { TerminalContext } from "../../hooks/useTerminalLog";
import { TerminalInput, TerminalStyle, TerminalTopBar } from "./style";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
export const Terminal = () => {
	const navigate = useNavigate();

	const {
		sendCommand,
		output,
		input,
		setOutput,
		setInput,
		isClose,
		setIsClose,
		isFullScren,
		setFullScreen,
		isCollapse,
		setIsCollapse,
	} = useContext(TerminalContext);
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
		<>
			{" "}
			<TerminalTopBar
				style={{
					width: isFullScren ? "100%" : "",
					top: isFullScren ? "0" : isCollapse ? "inherit" : "",
					bottom: isCollapse ? "0" : "",
					display: isClose ? "none" : "flex",
					zIndex: 10,
				}}
			>
				<CloseIcon
					onClick={() => {
						setIsClose(!isClose);
						setIsCollapse(false);
						setFullScreen(false);
					}}
					className="top-icons"
					style={{ background: "rgb(239 71 71)" }}
				/>
				<RemoveIcon
					onClick={() => {
						setIsCollapse(!isCollapse);
						setFullScreen(false);
						setIsClose(false);
					}}
					className="top-icons"
					style={{ background: "rgb(239 209 71)" }}
				/>{" "}
				<OpenInFullIcon
					onClick={() => {
						setFullScreen(!isFullScren);
						setIsCollapse(false);
						setIsClose(false);
					}}
					className="top-icons"
					style={{ background: "rgb(71 239 149)" }}
				/>
			</TerminalTopBar>
			<TerminalStyle
				ref={terminalRef}
				style={{
					paddingBottom: isFixed ? 50 : 0,
					width: isFullScren ? "100%" : "",
					height: isFullScren ? "100vh" : isCollapse ? "1px" : "",
					paddingTop: isFullScren && window.innerWidth < 768 ? "40px" : "",
					bottom: isCollapse ? "0px" : "",
					top: isCollapse ? "initial" : "",
					overflow: isCollapse ? "hidden" : "",
					background: isCollapse ? "transparent" : "",
					border: isCollapse ? "none" : "",
					display: isClose || isCollapse ? "none" : "",
				}}
				onClick={() => inputRef.current?.focus()}
			>
				<div>{output}</div> <div ref={bottomRef} />
				<TerminalInput
					style={{
						position: isFixed ? "fixed" : "relative",
						bottom: isFixed ? "0px" : "initial",
						display: isCollapse ? "none" : "flex",
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
		</>
	);
};
