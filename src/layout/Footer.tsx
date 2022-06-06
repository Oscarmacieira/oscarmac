import styled from "styled-components";

export const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <FooterStyle>
      <p>{year} BlockSwan Family©</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.primary};
`;
