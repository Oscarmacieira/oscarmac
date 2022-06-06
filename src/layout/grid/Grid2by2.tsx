import styled from "styled-components";

export const Grid2by2 = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;

  .big-image {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 50px;
  }
`;

export const Grid2 = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
`;
