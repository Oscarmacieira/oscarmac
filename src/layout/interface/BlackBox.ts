import styled from "styled-components";

export const BlackBox = styled.section`
  padding: 50px;
  padding-top: 100px;
  width: 100%;
  height: 60vh;
  background-color: ${({ theme }) => theme.palette.primary};
  position: relative;
  display: flex;
  @media (max-width: 768px) {
    height: 80vh;
  }
`;
