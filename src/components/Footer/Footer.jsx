import { device } from '../StylesAndTheming/device'
import React from "react";
import styled from "styled-components";

const currentYear = new Date().getFullYear();

const FooterContainer = styled.footer`
  display: block;
  margin: 14px 0 18px;
  min-width: 325px;
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.footerText};
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin: 0 auto;

  @media ${device.extraSmallDevices} {
    font-size: 1rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>App created by Oscar Pinchen {currentYear}</FooterText>
    </FooterContainer>
  );
}

export default Footer;
