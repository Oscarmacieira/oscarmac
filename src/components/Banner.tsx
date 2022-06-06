import styled from "styled-components";
export const Banner = (props: any) => {
  return <BannerImage>{props.children}</BannerImage>;
};

const BannerImage = styled.div`
  padding: 40px;
  width: 100%;
  height: 45vh;
  background: rgb(63, 64, 180);
  background: linear-gradient(
    90deg,
    rgba(63, 64, 180, 1) 0%,
    rgba(175, 75, 111, 1) 30%,
    rgba(129, 145, 84, 1) 36%,
    rgba(142, 126, 91, 1) 43%,
    rgba(175, 75, 111, 1) 47%,
    rgba(63, 64, 180, 1) 100%
  );
`;
