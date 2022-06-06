import styled from "styled-components";
export const SkillGrid = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 50px;
  grid-row-gap: 50px;
  width:100%;
  }
  @media (max-width:768px) {
    display:flex;
    flex-direction:column;
  }

  .div1 { grid-area: 1 / 1 / 2 / 4;
  display:flex; flex-direction:column; gap:50px; }
.div2 { grid-area: 1 / 4 / 2 / 6; }
`;
