import { useState } from "react";
import { start } from "repl";
import styled from "styled-components";
import {
	SquareButton,
	SquareButtonAlt,
} from "../../../components/buttons/SquareButton";
import { developerSkills } from "../../../utils/Skills";

export const Stats = ({ title, startingYear, fullArray }) => {
	const todayYear = new Date().getFullYear();
	const todayMonth = new Date().getMonth();
	const todayTotalM = todayYear * 12 + todayMonth + 1;
	const max = todayYear - startingYear;
	const [limit, setLimit] = useState(5);
	const array = [...fullArray].splice(0, limit);

	const seeMore = () => {
		if (limit < fullArray.length) {
			setLimit(limit + 5);
		} else setLimit(5);
	};
	return (
		<Statstyle>
			<h3 className="my-1">{title.toUpperCase()}</h3>
			<div
				className="flex align-items-center mb-3 mt-3 justify-space-between"
				style={{ overflow: "hidden" }}
			>
				<span className="years">Year of experience</span>
				<span>{max / 2}y</span>
				<span>{max}y</span>
			</div>
			{array.map((elem) => {
				const totalMonth = elem.year * 12 + elem.month + 1;
				const xpMonth = (todayTotalM - totalMonth) / 12;
				const xp = (xpMonth / max) * 100;
				return (
					<div className="my-3" key={`id${Math.random()}`}>
						<div className="flex align-items-center skill-name ">
							{elem.name.map((el, idx) => (
								<p style={{ fontSize: "0.85rem" }} key={el}>
									{idx === elem.name.length - 1 ? `${el}` : `${el} |`}
								</p>
							))}
						</div>
						<div
							className="progress"
							style={{
								width:
									elem.fixed && elem.fixed !== 0
										? `${(elem.fixed / (max * 12)) * 100}%`
										: `${xp}%`,
							}}
						></div>{" "}
					</div>
				);
			})}
			{fullArray.length <= 5 ? null : (
				<>
					{limit < fullArray.length ? (
						<SquareButton
							className="mt-3"
							style={{ width: "100%" }}
							onClick={seeMore}
						>
							SEE MORE
						</SquareButton>
					) : (
						<SquareButtonAlt
							className="mt-3"
							style={{ width: "100%" }}
							onClick={seeMore}
						>
							CLOSE
						</SquareButtonAlt>
					)}{" "}
				</>
			)}
		</Statstyle>
	);
};

const Statstyle = styled.section`
	gap: 10px;
	align-items: start;
	justify-content: flex-start;
	width: 100%;
	position: relative;
	overflow: hidden;
	h3 {
		border-bottom: 1px solid ${({ theme }) => theme.palette.color3};
		padding-bottom: 1rem;
	}
	.years {
		font-size: 0.8rem;
		opacity: 0.8;
	}
	.skill-name {
		width: fit-content;
		background: ${({ theme }) => theme.palette.color6};
	}
	.progress {
		width: 100%;
		height: 10px;
		background: transparent;
		border-radius: 10px;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			background: white;
			border-radius: inherit;
			height: 100%;
			width: 0;
			animation: lineGrow 1.5s ease-out forwards;
		}
	}
	span {
		width: 36%;
		&:nth-child(2) {
			text-align: center;
			width: 20%;
		}
		&:nth-child(3) {
			text-align: right;
			width: 44%;
		}
		&:nth-child(2):before,
		&:nth-child(3):before {
			position: absolute;
			content: "";
			background: #ffffff63;
			height: calc(100% - 150px);
			width: 1px;
			z-index: -1;
			transform: translate(10px, 30px);
		}
	}

	@keyframes lineGrow {
		to {
			width: 100%;
		}
	}
`;
