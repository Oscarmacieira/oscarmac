import styled from "styled-components";
export const ProgressBar = ({ value }) => {
  return (
    <ProgressBarStyle>
      <div style={{ width: `${value}%` }} className="inner" />
    </ProgressBarStyle>
  );
};

const ProgressBarStyle = styled.div`
  width: 100%;
  border-radius: 50px;
  background: ${({ theme }) => theme.palette.color6};
  padding: 1px;
  height: 14px;

  .inner {
    background: yellow;
    border-radius: inherit;
    height: 100%;
  }
`;
