import { Container } from "./../../layout/Container";
import { Card } from "../../components/Card";
import { SquareButton } from "../../components/buttons/SquareButton";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { Spacer } from "../../layout/Spacer";
import { GradientZone } from "../../layout/interface/Gradient";
import { SkillGrid } from "./styles";
import { Stats } from "./components/Stats";
import { aboutMe, designerSkills, developerSkills } from "../../utils/Skills";
import { H1MdColored } from "../../components/Typography/H1";
import Flag from "react-flagkit";
import { IMdShy, Pmd, Psm } from "../../components/Typography/P";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import ShareIcon from "@mui/icons-material/Share";
import { motion } from "framer-motion";
export const Skills = () => {
	function getSkillIcon(icon: string) {
		switch (icon.toLowerCase()) {
			case "new tech":
				return <DeveloperBoardIcon />;
				break;
			case "football":
				return <SportsSoccerIcon />;
				break;
			case "design & conception":
				return <ArchitectureIcon />;
				break;
			case "experiences & discovery":
				return <TravelExploreIcon />;

				break;
			case "karate":
				return <SportsMartialArtsIcon />;
				break;
			case "social media":
				return <ShareIcon />;
				break;

			default:
				break;
		}
	}
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<GradientZone />
			<Container
				style={{
					alignItems: "center",
					justifyContent: "center",
					gap: 50,
				}}
			>
				<SkillGrid>
					<div className="div1">
						<Card style={{ zIndex: 1, width: "100%", height: "fit-content" }}>
							{" "}
							<Stats
								title={"Developer Skills"}
								fullArray={developerSkills.program}
								startingYear={2019}
							/>
						</Card>{" "}
						<Card style={{ zIndex: 1, width: "100%", height: "fit-content" }}>
							<Stats
								title={"Designer skills"}
								fullArray={designerSkills}
								startingYear={2016}
							/>{" "}
						</Card>{" "}
					</div>{" "}
					<Card
						className="div2"
						style={{ zIndex: 1, width: "100%", height: "fit-content" }}
					>
						<h3
							className="card-title ml-0"
							style={{ paddingLeft: 0, marginTop: 0, paddingTop: 0 }}
						>
							ABOUT ME
						</h3>
						<div className="border-colored" style={{ width: "100%" }}>
							{" "}
							<H1MdColored>LANGUAGES</H1MdColored>{" "}
							{aboutMe.languages.map((elem) => (
								<div
									className="flex align-items-center my-1"
									style={{ width: "100%" }}
									key={elem.country}
								>
									{" "}
									<Flag country={elem.country} className="mr-2" />
									<Pmd>{elem.lvl}</Pmd>{" "}
								</div>
							))}
						</div>
						<div className="border-colored" style={{ width: "100%" }}>
							<H1MdColored>PERSONALITY</H1MdColored>
							{aboutMe.personality.map((elem) => (
								<div
									className="flex align-items-center my-1"
									style={{ width: "100%" }}
								>
									<Pmd className="my-1">{`> ${elem}`}</Pmd>
								</div>
							))}
						</div>
						<div className="border-colored" style={{ width: "100%" }}>
							<H1MdColored>OTHER SKILLS</H1MdColored>
							{aboutMe.otherSkills.map((elem) => (
								<div
									className="flex align-items-center my-1"
									style={{ width: "100%" }}
								>
									<CheckCircleIcon className="mr-2" />
									<Pmd>{elem}</Pmd>
								</div>
							))}
						</div>
						<div className="border-colored" style={{ width: "100%" }}>
							<H1MdColored>HOBBIES</H1MdColored>
							{aboutMe.hobbies.map((elem) => (
								<div
									className="flex align-items-center my-1"
									style={{ width: "100%" }}
								>
									{" "}
									{getSkillIcon(elem)}
									<Pmd className="ml-2">{elem}</Pmd>
								</div>
							))}
						</div>
						<div className="border-colored" style={{ width: "100%" }}>
							<H1MdColored>CERTIFICATIONS/AWARDS</H1MdColored>
							{aboutMe.certifications.map((elem) => (
								<div
									className="flex-column align-items-start my-1"
									style={{ width: "100%" }}
								>
									<Pmd>{elem.name}</Pmd>
									<IMdShy>{elem.description}</IMdShy>
								</div>
							))}
						</div>
					</Card>{" "}
				</SkillGrid>
			</Container>
		</motion.div>
	);
};
