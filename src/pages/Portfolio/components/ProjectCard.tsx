import styled from "styled-components";
import { H1MdColored } from "../../../components/Typography/H1";
import { Pmd } from "../../../components/Typography/P";
import CodeIcon from "@mui/icons-material/Code";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import { useContext } from "react";
import { TerminalContext } from "../../../hooks/useTerminalLog";
export const ProjectCard = ({
	title = "",
	gitLink = "",
	prod = "",
	behance = "",
	tags,
	img = "family",
}) => {
	function getIconfromTag(tag: string) {
		switch (tag) {
			case "Printed":
				return <LocalPrintshopIcon className="icon-tag" />;
				break;
			case "Brand Identity":
				return <FingerprintIcon className="icon-tag" />;
				break;
			case "Game":
				return <VideogameAssetIcon className="icon-tag" />;
				break;

			case "Javascript":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
				break;
			case "CSS":
				return (
					<i className={`devicon-${tag.toLowerCase()}3-plain icon-tag`}></i>
				);
				break;
			case "Photoshop":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
			case "Illustrator":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
				break;
			case "mySQL":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
				break;
			case "PHP":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
				break;

			case "HTML":
				return (
					<i className={`devicon-${tag.toLowerCase()}5-plain icon-tag`}></i>
				);
				break;
			case "Bootstrap":
				return (
					<i className={`devicon-${tag.toLowerCase()}-plain icon-tag`}></i>
				);
				break;
			case "MUI":
				return <i className={`devicon-materialui-plain icon-tag`}></i>;
				break;

			case "Moralis":
				return (
					<img
						className="icon-tag"
						alt="moralis"
						src="img/portfolio/icons/moralis.svg"
						style={{ height: "1.5rem", position: "relative" }}
					/>
				);
				break;
			case "styled-components":
				return (
					<img
						className="icon-tag"
						alt="moralis"
						src="img/portfolio/icons/styled.svg"
						style={{ height: "1.5rem", position: "relative" }}
					/>
				);
				break;

			case "Solidity":
				return (
					<img
						className="icon-tag"
						alt="moralis"
						src="img/portfolio/icons/solidity.svg"
						style={{ height: "1.5rem", position: "relative" }}
					/>
				);
				break;

			default:
				return (
					<i className={`devicon-${tag.toLowerCase()}-original icon-tag`}></i>
				);
				break;
		}
	}
	const { printToConsole } = useContext(TerminalContext);
	return (
		<ProjectCardStyle>
			<div
				className="img"
				style={{
					backgroundImage: `url("img/portfolio/${img}.png")`,
				}}
			/>
			<div className="tags">
				{" "}
				{tags?.map((elem) => (
					<>{getIconfromTag(elem)} </>
				))}
			</div>

			<H1MdColored style={{ marginInline: 0 }}>{title}</H1MdColored>
			<div className="flex align-items-center justify-space-between">
				{gitLink !== "" && (
					<a
						onClick={() => printToConsole(`opening source code of ${title}`)}
						href={gitLink}
						target="_blank"
						rel="noreferrer"
						className="flex justify-content-center align-items-center hover-btn"
					>
						<CodeIcon className="mr-1 icon-link" /> <Pmd>Source code</Pmd>{" "}
					</a>
				)}{" "}
				{prod !== "" && (
					<a
						href={prod}
						onClick={() => printToConsole(`opening ${title}`)}
						target="_blank"
						rel="noreferrer"
						className="flex justify-content-center align-items-center hover-btn"
					>
						<RemoveRedEyeIcon className="mr-1 icon-link" /> <Pmd>Go to</Pmd>{" "}
					</a>
				)}{" "}
				{behance !== "" && (
					<a
						onClick={() => printToConsole(`opening ${title}'s artboard`)}
						href={behance}
						target="_blank"
						rel="noreferrer"
						className="flex justify-content-center align-items-center hover-btn"
					>
						<ArtTrackIcon className="mr-1 icon-link" /> <Pmd>See Artboard</Pmd>{" "}
					</a>
				)}{" "}
			</div>
		</ProjectCardStyle>
	);
};

const ProjectCardStyle = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	overflow: hidden;
	height: 100%;
	background: ${({ theme }) => theme.palette.secondary};
	a {
		color: ${({ theme }) => theme.palette.contrast};
	}
	.img {
		background-position: center;
		background-size: cover;
		position: relative;
		width: 100%;
		aspect-ratio: 2/1;
	}
	height: fit-content;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.palette.color3};
	.tags {
		display: flex;
		gap: 10px;
		padding: 10px;
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		align-items: center;
		justify-content: center;

		background: ${({ theme }) => theme.palette.secondary};
		&:before {
			z-index: 0;
			width: 100%;
			position: absolute;
			top: -5px;
			left: -5px;
			content: "";
			width: 100%;
			filter: blur(10px);
			background: ${({ theme }) => theme.palette.secondary};
			height: 80px;
		}
	}
	.icon-tag {
		margin-top: 5px;
		z-index: 1;
		height: 1.5rem;
		font-size: 1.5rem;
	}
`;
