import { useState } from "react";
import { IMdShy, PMdShy } from "../../../components/Typography/P";
import { H1MdColored } from "../../../components/Typography/H1";
import {
	SquareButton,
	SquareButtonAlt,
} from "../../../components/buttons/SquareButton";

export const TimeLine = ({ fullArray }) => {
	const [limit, setLimit] = useState(3);
	return (
		<>
			{" "}
			<div
				className="flex-column align-items-center band"
				style={{ width: "100%", gap: 25 }}
			>
				{[...fullArray].splice(0, limit).map((elem) => (
					<div
						key={elem.title}
						className="flex align-items-center "
						style={{ position: "relative", width: "100%" }}
					>
						<span className="ball" />{" "}
						<div className="flex-column">
							<div className="flex align-items-center" style={{ gap: 5 }}>
								<H1MdColored>{elem.title}</H1MdColored>{" "}
								<PMdShy>{elem.date}</PMdShy>
							</div>{" "}
							<div className="flex align-items-center" style={{ gap: 10 }}>
								{" "}
								<a href={elem.href} target="_blank" rel="noreferrer">
									<IMdShy style={{ fontSize: "1.1rem" }}>
										@{elem.company}
									</IMdShy>
								</a>{" "}
								{elem.type && <div className="type">{elem.type}</div>}
							</div>{" "}
							<div className="flex-column">
								{" "}
								{elem.done.map((el, elIdx) => (
									<p key={el + elIdx}>{`> ${el}`}</p>
								))}
							</div>{" "}
						</div>
					</div>
				))}{" "}
			</div>{" "}
			<div
				className="flex align-items-center justify-content-center"
				style={{
					width: "fit-content",
					marginInline: "auto",
					marginTop: 35,
				}}
			>
				{fullArray.length > 3 ? (
					<>
						{" "}
						{limit < fullArray.length ? (
							<SquareButton onClick={() => setLimit(limit + 3)}>
								SEE MORE
							</SquareButton>
						) : (
							<SquareButtonAlt onClick={() => setLimit(3)}>
								CLOSE
							</SquareButtonAlt>
						)}{" "}
					</>
				) : null}{" "}
			</div>
		</>
	);
};
