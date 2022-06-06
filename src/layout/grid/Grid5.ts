import styled from "styled-components";

export const Grid5 = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  overflow: scroll;
  overflow-y: hidden;
  @media (max-width: 1200px) {
  }
`;
