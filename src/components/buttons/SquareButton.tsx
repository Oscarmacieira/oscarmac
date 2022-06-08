import styled from "styled-components";

export const SquareButton = styled.button`
	background-color: ${({ theme }) => theme.palette.color1};
	color: ${({ theme }) => theme.palette.primary};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 5px 20px;
	font-size: 1rem;
	transition: ease 0.255555s;
	border: 1.5px solid transparent;
	border-radius: 0px;
	height: fit-content;
	width: fit-content;
	:hover {
		background-color: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.color1};
		border: 1.5px solid ${({ theme }) => theme.palette.color1};
	}
`;

export const SquareButtonAlt = styled(SquareButton)`
	color: ${({ theme }) => theme.palette.color1};
	background-color: ${({ theme }) => theme.palette.primary};
	border: 1.5px solid ${({ theme }) => theme.palette.color1};
	:hover {
		background-color: ${({ theme }) => theme.palette.color1};
		color: ${({ theme }) => theme.palette.primary};
		border: 1.5px solid transparent;
	}
`;

export const SquareButtonMd = styled(SquareButton)`
	font-size: 0.8rem;
`;

export const SquareButtonMdWhiteAlt = styled(SquareButtonMd)`
	background-color: transparent;
	color: ${({ theme }) => theme.palette.contrast};
	border: 1.5px solid ${({ theme }) => theme.palette.contrast};
	&:hover {
		background-color: ${({ theme }) => theme.palette.contrast};
		color: ${({ theme }) => theme.palette.secondary};
		border: 1.5px solid ${({ theme }) => theme.palette.contrast};
	}
	&:disabled {
		background-color: ${({ theme }) => theme.palette.contrast};
		color: ${({ theme }) => theme.palette.secondary};
		border: 1.5px solid ${({ theme }) => theme.palette.contrast};
	}
`;
export const SquareButtonMdWhite = styled(SquareButtonMdWhiteAlt)`
	background-color: ${({ theme }) => theme.palette.contrast};
	color: ${({ theme }) => theme.palette.secondary};
	border: 1.5px solid ${({ theme }) => theme.palette.contrast};
	&:hover {
		background-color: transparent;
		color: ${({ theme }) => theme.palette.contrast};
		border: 1.5px solid ${({ theme }) => theme.palette.contrast};
	}
`;
