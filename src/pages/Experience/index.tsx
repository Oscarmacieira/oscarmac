import { useState } from "react";
import {
	SquareButton,
	SquareButtonAlt,
} from "../../components/buttons/SquareButton";
import { H1MdColored } from "../../components/Typography/H1";
import { IMdShy, PMdShy } from "../../components/Typography/P";
import { Container } from "../../layout/Container";
import { experiences } from "../../utils/Experiences";
import { ProfessionalXPCard } from "./style";
import { TimeLine } from "./components/TimeLine";
import { Academic } from "./components/Academic";
import { SkillGrid } from "../Skills/styles";
export const Experience = () => {
	return (
		<>
			<Container style={{ marginInline: "auto" }}>
				{" "}
				<SkillGrid>
					<div className="div1">
						{" "}
						<ProfessionalXPCard
							style={{
								width: "100%",
								height: "fit-content",
								maxWidth: 760,
								marginInline: "auto",
							}}
						>
							<h3
								className="card-title"
								style={{ marginTop: 0, paddingTop: 0 }}
							>
								PERSONAL XP
							</h3>
							<TimeLine fullArray={experiences.personnal} />{" "}
						</ProfessionalXPCard>{" "}
						<ProfessionalXPCard
							style={{ width: "100%", maxWidth: 760, marginInline: "auto" }}
						>
							<h3
								className="card-title"
								style={{ marginTop: 0, paddingTop: 0 }}
							>
								ACADEMIC XP
							</h3>
							<Academic fullArray={experiences.academic} />{" "}
						</ProfessionalXPCard>
					</div>{" "}
					<ProfessionalXPCard
						className="div2"
						style={{
							width: "100%",
							height: "fit-content",
							maxWidth: 760,
							marginInline: "auto",
						}}
					>
						<h3 className="card-title" style={{ marginTop: 0, paddingTop: 0 }}>
							PROFESSIONAL XP
						</h3>
						<TimeLine fullArray={experiences.professional} />{" "}
					</ProfessionalXPCard>{" "}
				</SkillGrid>{" "}
			</Container>
		</>
	);
};
