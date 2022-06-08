import { useEffect, useState, useContext } from "react";
import {
	SquareButtonMdWhite,
	SquareButton,
	SquareButtonMdWhiteAlt,
	SquareButtonAlt,
} from "../../components/buttons/SquareButton";
import { TerminalContext } from "../../hooks/useTerminalLog";
import { Card } from "../../components/Card";
import { Container } from "../../layout/Container";
import { Grid2, Grid2by2 } from "../../layout/grid/Grid2by2";
import { portfolio } from "../../utils/Portfolio";
import { ProjectCard } from "./components/ProjectCard";
import { motion } from "framer-motion";
export const Portoflio = () => {
	const [filter, setFilter] = useState("");
	const { printToConsole } = useContext(TerminalContext);
	const [limit, setLimit] = useState(6);
	function retrieve(arr, value) {
		let newArr: any = [];
		for (let x = 0; x < arr.length; x++) {
			if (arr[x].tags.includes(value)) {
				newArr.push(arr[x]);
			}
		}
		return newArr;
	}
	console.log(retrieve(portfolio.projects, ["CSS"]));
	const array =
		filter === "" ? portfolio.projects : retrieve(portfolio.projects, filter);

	useEffect(() => {
		printToConsole(`retrieving ${filter === "" ? "ALL" : filter} projects`);
	}, [filter]);

	return (
		<motion.div
			initial={{ width: 0 }}
			animate={{ width: "100%" }}
			exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
		>
			<Container>
				<Card style={{ marginInline: "auto", width: "100%", zIndex: 1 }}>
					<div
						className="flex align-items-center"
						style={{ gap: 10, flexWrap: "wrap", justifyContent: "center" }}
					>
						{" "}
						{portfolio.tags.map((elem) => (
							<>
								<SquareButtonMdWhiteAlt
									onClick={() => {
										setFilter(elem);
										setLimit(6);
									}}
									key={elem}
									disabled={elem === filter}
								>
									{elem}
								</SquareButtonMdWhiteAlt>
							</>
						))}
					</div>{" "}
					<br />
					<Grid2by2 style={{ width: "100%", rowGap: 35, columnGap: 35 }}>
						{[...array].splice(0, limit).map((elem) => (
							<ProjectCard
								key={Math.random()}
								title={elem.title}
								tags={elem.tags}
								gitLink={elem.github}
								behance={elem.behance}
								prod={elem.prod}
								img={elem.img}
							/>
						))}{" "}
					</Grid2by2>
					{array.length > 6 ? (
						<div
							style={{
								width: "100%",
								marginTop: 20,
								display: "flex",
								justifyContent: "center",
							}}
						>
							{limit < array.length ? (
								<SquareButton
									onClick={() => {
										setLimit(limit + 6);
										printToConsole(
											`loading more ${filter === "" ? "ALL" : filter} projects`
										);
									}}
								>
									SEE MORE
								</SquareButton>
							) : (
								<SquareButtonAlt
									onClick={() => {
										setLimit(6);
										printToConsole(
											`closing ${filter === "" ? "ALL" : filter} projects`
										);
									}}
								>
									CLOSE
								</SquareButtonAlt>
							)}
						</div>
					) : null}
				</Card>
			</Container>
		</motion.div>
	);
};
