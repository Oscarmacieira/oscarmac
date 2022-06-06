import styled from "styled-components";

export const H1Md = styled.h1`
	color: ${({ theme }) => theme.palette.contrast};
	font-size: 1rem;
`;

export const H1SmColored = styled.h1`
	color: ${({ theme }) => theme.palette.color1};
	font-size: 0.7rem;
`;

export const H1MdColored = styled(H1Md)`
	color: ${({ theme }) => theme.palette.color1};
`;
