import React from "react";
import styled from "styled-components";

const currentYear = new Date().getFullYear();

const FooterContainer=styled.footer`
margin-top: 14px;
text-align: center;
`

const FooterText=styled.p`
color: ${({ theme }) => theme.footerText};
display: inline;
margin: 0 5px;
`

function Footer() {
    return <FooterContainer>
        <FooterText>App created by Oscar Pinchen</FooterText>
        <FooterText>{currentYear}</FooterText>
    </FooterContainer>
}

export default Footer;