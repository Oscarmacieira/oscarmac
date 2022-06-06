import styled from "styled-components";
export const BigBanner = (props: any) => {
  return (
    <>
      <BannerImage>{props.children}</BannerImage>
    </>
  );
};

const BannerImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(2, 2, 2, 0.73)
    ),
    url("./img/everywhere-nowhere.png");
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;

const GradientFilter = styled.div`
  height: 100%;
  width: 100%;
`;
