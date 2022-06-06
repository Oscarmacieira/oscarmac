import styled from "styled-components";

export const Grid4 = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 0px;

  @media (max-width: 1200px) {
    overflow: scroll;
    overflow-y: hidden;
  }
`;
