import { Container } from "./../../layout/Container";
import { Card } from "../../components/Card";
import { SquareButton } from "../../components/buttons/SquareButton";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { GradientZone } from "../../layout/interface/Gradient";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { TerminalContext } from "../../hooks/useTerminalLog";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
export const Home = () => {
	const words = ["Developer", "Designer", "Builder"];
	const { text } = useTypewriter({
		words,
		loop: 0, // Infinit
	});
	const navigate = useNavigate();
	const { printToConsole } = useContext(TerminalContext);
	const age = new Date().getFullYear() - 1999;
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container
				style={{
					alignItems: "center",
					justifyContent: "center",
					gap: 50,
				}}
			>
				<Card
					style={{ zIndex: 1, width: "fit-content", height: "fit-content" }}
				>
					<div
						className="flex align-items-center"
						style={{ gap: 20, marginInline: "auto" }}
					>
						<img style={{ width: "100px" }} alt="me" src="img/home/me.png" />{" "}
						<div
							className="ml-3"
							style={{
								height: "100%",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<h1 style={{ fontSize: "2rem", margin: 0 }}>Oscar</h1>
							<h2 style={{ fontSize: "2rem", margin: 0 }}>Macieira</h2>
							<div className="flex align-items-center">
								<FmdGoodIcon /> <p>Paris | FRANCE</p>{" "}
							</div>
						</div>
					</div>{" "}
					<div>
						<h1>GM fren,</h1>
						<div className="flex align-items-center">
							<h1>
								I am a {age}yo <i>web3 </i>
								<span className="colored">
									{text}
									<Cursor cursorStyle="_" />{" "}
								</span>{" "}
							</h1>
						</div>{" "}
						<h1 style={{ maxWidth: 768 }}>
							With several cards under my sleeve, I seek to build the digital
							interfaces of tomorrow.
						</h1>
					</div>
				</Card>
				<SquareButton
					style={{ zIndex: 1 }}
					onClick={() => {
						printToConsole("opening CV");
						window.open("/cv.pdf", "_blank");
					}}
					className="mx-1"
				>
					See CV in pdf
				</SquareButton>
			</Container>
		</motion.div>
	);
};
