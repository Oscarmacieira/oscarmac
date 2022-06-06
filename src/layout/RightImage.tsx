import styled from "styled-components";

export const RightImage = (props: any) => {
  return (
    <RightImageLayout>
      <div
        id="item-0"
        className="flex-column justify-center  align-items-center"
      >
        <h1 className="text-start">{props.title}</h1>
        <br />
        <p>{props.text}</p>
      </div>
      <div id="item-1">
        {" "}
        <img alt="img" src={props.src} />
      </div>
    </RightImageLayout>
  );
};

export const RightImageLayout = styled.section`
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
    width: 100%;

    grid-area: 1 / 1 / 2 / 3;
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 100%;
    height: fit-content;
    @media (max-width: 768px) {
      grid-area: 1 / 1 / 2 / 2;
    }
    h1 {
      width: 100%;
    }
  }
  #item-1 {
    grid-area: 1 / 3 / 2 / 4;
    @media (max-width: 768px) {
      grid-area: 2 / 1 / 3 / 2;
    }
    img {
      width: 100%;
      height: auto;
      /* @media (max-width: 768px) {
        position: relative;
        width: 100%;
        height: auto;
      } */
    }
  }
`;
