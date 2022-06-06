import styled from "styled-components";

export const Psm = styled.p`
	color: ${({ theme }) => theme.palette.contrast};
	font-size: 0.7rem;
	margin: 3px;
`;

export const PsmallError = styled(Psm)`
	color: ${({ theme }) => theme.palette.error};
`;

export const PSmShy = styled(Psm)`
	color: ${({ theme }) => theme.palette.secondary};
	opacity: 0.8;
`;

export const Pmd = styled.p`
	color: ${({ theme }) => theme.palette.contrast};
	font-size: 0.85rem;
	margin: 3px;
`;

export const PMdShy = styled.p`
	color: ${({ theme }) => theme.palette.contrast};
	opacity: 0.8;
	font-size: 0.8rem;
`;

export const IMdShy = styled.i`
	color: ${({ theme }) => theme.palette.contrast};
	opacity: 0.8;
	font-size: 0.8rem;
`;
