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
	padding-top: 40px;
	font-size: 0.8rem;
	line-height: 0.8rem;
	white-space: pre-line;
	overflow-y: scroll;
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.palette.color1};
		width: 2px;
	}
	::-webkit-scrollbar-track {
		width: 2px;
		background-color: ${({ theme }) => theme.palette.color5};
	}
	@media (max-width: 768px) {
		padding-top: 0px;
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
		color: ${({ theme }) => theme.palette.color1};
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
		caret-color: ${({ theme }) => theme.palette.color1};
	}
`;

export const TerminalTopBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 250px;
	background: ${({ theme }) => theme.palette.color3};
	height: 30px;
	position: fixed;
	z-index: 3;
	top: 0;
	gap: 10px;
	right: 0;
	padding: 2px 10px;
	border-left: 1px solid ${({ theme }) => theme.palette.color1};
	border-bottom: 1px solid ${({ theme }) => theme.palette.color1};
	border-top: 1px solid ${({ theme }) => theme.palette.color1};
	@media (max-width: 768px) {
		top: inherit;
		bottom: 30vh;
		width: 100%;
	}
	.top-icons {
		padding: 1px;
		color: white;
		height: 15px;
		width: 14px;
		border-radius: 50px;
		animation: 0.3s ease-in;
		content: "";
		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}
`;
