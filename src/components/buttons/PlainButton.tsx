import styled from "styled-components";

export const PlainButton = styled.button`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.7rem;
  transition: ease 0.5s;
  border: 3px solid ${({ theme }) => theme.palette.contrast};
  height: fit-content;
  width: fit-content;

  :hover {
    background-color: ${({ theme }) => theme.palette.primary};
    color: ${({ theme }) => theme.palette.secondary};
    border: 2px solid ${({ theme }) => theme.palette.secondary};
  }
  :disabled {
    background-color: grey;
  }
`;
