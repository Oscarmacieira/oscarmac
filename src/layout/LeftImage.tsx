import styled from "styled-components";

export const LeftImage = (props: any) => {
  return (
    <LeftImageLayout>
      <div id="item-0">
        <img alt="img" src={props.src} />
      </div>
      <div id="item-1">
        <h1 className="text-start">{props.title}</h1>
        <br />
        <p>{props.text}</p>
      </div>
    </LeftImageLayout>
  );
};

export const LeftImageLayout = styled.section`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
  color: ${({ theme }) => theme.palette.contrast};

  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 10px;
  }

  #item-0 {
    grid-area: 1 / 1 / 2 / 2;
    height: fit-content;

    img {
      width: 100%;
      height: auto;
      /* @media (max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
      } */
    }

    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }
  #item-1 {
    grid-area: 1 / 2 / 2 / 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    height: fit-content;

    @media (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
`;
