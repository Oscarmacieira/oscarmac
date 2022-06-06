import styled from "styled-components";

export const TerminalStyle = styled.div`
	position: fixed;
	height: 100vh;
	top: 0px;
	right: 0px;
	background: ${({ theme }) => theme.palette.color6};
	width: 250px;
	border-left: 1px solid ${({ theme }) => theme.palette.color1};
	padding: 10px;
	z-index: 5;
	font-size: 0.8rem;
	line-height: 0.8rem;
	white-space: pre-line;
	overflow-y: scroll;
	@media (max-width: 768px) {
		top: inherit;
		bottom: 0px;
		height: 30vh;
		width: 100%;
		border-left: none;
		border-top: 1px solid ${({ theme }) => theme.palette.color1};
	}
`;
export const TerminalInput = styled.div`
	width: 100%;
	height: "fit-content";
	display: flex;
	align-items: center;
	gap: 10px;
	background: ${({ theme }) => theme.palette.color6};

	p {
		margin: 0px;
		padding: 0px;
		color: pink;
		font-weight: bold;
	}
	input {
		width: 100%;
		height: fit-content;
		padding: 5px;
		margin: 0;
		outline: none;
		border: none;
		background: transparent;
		font-size: 0.9rem;
		color: ${({ theme }) => theme.palette.contrast};
	}
`;
