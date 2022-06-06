import styled from "styled-components";

export const BlueButton = (props: any) => {
  return (
    <BlueButtonStyle disabled={props.disabled}>{props.title}</BlueButtonStyle>
  );
};

const BlueButtonStyle = styled.button`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.secondary};
  border-radius: 20px;
  transition: ease 1s;
  :hover {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
  }
`;
