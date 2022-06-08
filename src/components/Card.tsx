import styled from "styled-components";

export const Card = styled.section`
	background: ${({ theme }) => theme.palette.color6};
	border: 1px solid ${({ theme }) => theme.palette.color1};
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 35px;
	padding: 35px;
	width: fit-content;
	gap: 10px;
	align-items: start;
	justify-content: flex-start;

	@media (max-width: 768px) {
		width: 100%;
	}
	.card-title {
		width: 100%;
		padding: 1rem;
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.palette.color3};
	}
	.border-colored {
		padding-bottom: 1rem;

		border-bottom: 1px solid ${({ theme }) => theme.palette.color3};
	}
`;
