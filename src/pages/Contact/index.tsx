import { SphereAnim } from "../../anim/SphereAnim/SphereAnim";
import { useContext } from "react";
import { Card } from "../../components/Card";
import { Container } from "../../layout/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { TerminalContext } from "../../hooks/useTerminalLog";
import { motion } from "framer-motion";
export const Contact = () => {
	const { printToConsole } = useContext(TerminalContext);
	const socials = [
		{
			name: `github`,
			href: "https://github.com/Oscarmacieira?tab=repositories",
		},
		{
			name: `linkedin`,
			href: "https://www.linkedin.com/in/oscar-macieira-152084160/",
		},
		{ name: "twitter", href: "https://twitter.com/OMacieira" },
		{ name: "behance", href: "https://www.behance.net/OscarDzn" },
	];

	const getSocialIcon = (name: string) => {
		switch (name) {
			case "github":
				return <GitHubIcon />;
				break;
			case "linkedin":
				return <LinkedInIcon />;
				break;
			case "twitter":
				return <TwitterIcon />;
				break;
			case "behance":
				return <DesignServicesIcon />;
				break;
			default:
				break;
		}
	};
	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			{" "}
			<Container>
				<Card
					style={{
						marginInline: "auto",
						width: "fit-content",
						height: 500,
					}}
				>
					<SphereAnim />
					<div className="flex-column align-items-center">
						<h1 className="text-center">
							Click on the planet to reach me by mail!
						</h1>
						<p className="text-center">you can also find me on social medias</p>
						<div
							className="flex align-items-center"
							style={{ gap: 10, marginTop: 10, color: "white" }}
						>
							{socials.map((elem) => (
								<a
									onClick={() =>
										printToConsole(`opening ${elem.name} redirection`)
									}
									className="hover-btn"
									style={{ color: "white" }}
									href={elem.href}
									target="_blank"
									rel="noreferrer"
									key={elem.name}
								>
									{getSocialIcon(elem.name)}
								</a>
							))}
						</div>
					</div>
				</Card>
			</Container>
		</motion.div>
	);
};
