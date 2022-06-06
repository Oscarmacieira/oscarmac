import { useState } from "react";
import { IMdShy, PMdShy } from "../../../components/Typography/P";
import { H1MdColored } from "../../../components/Typography/H1";
import {
	SquareButton,
	SquareButtonAlt,
} from "../../../components/buttons/SquareButton";

export const Academic = ({ fullArray }) => {
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
							</div>{" "}
							{elem.course.map((el) => (
								<div key={el.university} style={{ paddingBottom: 5 }}>
									{" "}
									<div className="flex align-items-center" style={{ gap: 15 }}>
										{" "}
										<div
											className="flex align-items-center"
											style={{ gap: 10 }}
										>
											{" "}
											<IMdShy style={{ fontSize: "1.1rem" }}>
												@{el.university}
											</IMdShy>
											<PMdShy>{el.date}</PMdShy>
										</div>{" "}
									</div>{" "}
									<p>{el.description}</p>
								</div>
							))}{" "}
						</div>
					</div>
				))}{" "}
			</div>{" "}
		</>
	);
};
