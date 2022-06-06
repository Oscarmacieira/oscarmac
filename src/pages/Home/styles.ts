import styled from "styled-components";

export const Gradient = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.primary} 10.09%,
    ${({ theme }) => theme.palette.secondary} 35.69%,
    ${({ theme }) => theme.palette.primary} 100%
  );
  width: 100%;
`;
export const GradientInvert = styled.section`
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.palette.secondary} 10.09%,
    ${({ theme }) => theme.palette.primary} 35.69%
  );
  width: 100%;
`;
