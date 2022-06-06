import styled from "styled-components";
import { Card } from "../../components/Card";

export const ProfessionalXPCard = styled(Card)`
	position: relative;
	overflow: hidden;
	margin-inline: "auto";
	h1 {
		margin-inline: 0px;
	}
	.band {
		margin-left: 60px;
		padding-right: 60px;
		width: 100%;
		position: relative;
		&:before {
			position: absolute;
			content: "";
			left: -50px;
			height: 0;
			animation: grow 1s ease-in forwards;
      width: 5px;
			background: ${({ theme }) => theme.palette.color1};
		}
		.ball {
			top: 5px;
			position: absolute;
			left: -60px;
			width: 25px;
			height: 25px;
			border-radius: 50px;
			background: ${({ theme }) => theme.palette.color1};
		}
	}
	a {
		&:hover i {
			opacity: 1;
		}
	}
	.type {
		border: 1px solid ${({ theme }) => theme.palette.color1};
		border-radius: 5px;
		font-size: 0.5rem;
		padding: 5px 5px;
	}
	@keyframes grow {
		to {
			height: calc(100%);
		}
	}
`;
