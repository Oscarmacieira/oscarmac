import { Container } from "./../../layout/Container";
import { ParticleBackground } from "../../anim/ParticleAnim/ParticleBackground";
import { Card } from "../../components/Card";
import { SquareButton } from "../../components/buttons/SquareButton";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { GradientZone } from "../../layout/interface/Gradient";
export const Home = () => {
	return (
		<div>
			<GradientZone />
			{/* <ParticleBackground/> */}
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
					<h1>
						Gm fren, <br /> I am a web3 entreprenor.
						<br />I seek to build the digital interfaces of tomorrow
					</h1>
				</Card>
				<SquareButton className="mx-1">See CV in pdf</SquareButton>
			</Container>
		</div>
	);
};
