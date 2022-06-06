import styled from "styled-components";

export const RoundButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.secondary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 0.8rem;
  transition: ease 0.5s;
  border: 3px solid ${({ theme }) => theme.palette.contrast};
  height: fit-content;
  width: fit-content;

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary};
    color: ${({ theme }) => theme.palette.primary};
    border: 3px solid transparent;
  }
  :disabled {
    background-color: grey;
  }
`;

export const RoundButtonAlt = styled(RoundButton)`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.primary};
  font-weight: bold;
  border: 3px solid transparent;

  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.secondary};
    border: 3px solid ${({ theme }) => theme.palette.contrast};
  }
  :disabled {
    background-color: grey;
  }
`;

export const RoundButtonColor = styled(RoundButtonAlt)`
  background-color: ${({ theme }) => theme.palette.color4};
  color: ${({ theme }) => theme.palette.primary};
  border: 3px solid transparent;

  :hover {
    border: 3px solid ${({ theme }) => theme.palette.color4};
    background-color: ${({ theme }) => theme.palette.color2};
    color: ${({ theme }) => theme.palette.primary};
  }
  :disabled {
    background-color: grey;
  }
`;
