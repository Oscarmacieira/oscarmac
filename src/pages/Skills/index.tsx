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
import { Pmd, Psm } from "../../components/Typography/P";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
export const Skills = () => {
	return (
		<div>
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
								title={"Developer Skill"}
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
									<CheckCircleIcon className="mr-2" />
									<Pmd>{elem}</Pmd>
								</div>
							))}
						</div>
					</Card>{" "}
				</SkillGrid>
				<SquareButton className="mx-1">See CV in pdf</SquareButton>
			</Container>
		</div>
	);
};
