import { device } from '../StylesAndTheming/device';
import { faSun, faCloudShowersHeavy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react';
import styled from 'styled-components';

const rainIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
const shineIcon = <FontAwesomeIcon icon={faSun} />;

const PageTitle = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 4px;
  margin: 0;
  padding: 15px 0 15px;
  transition: 0.15s;

  @media ${device.extraSmallDevices} {
    font-size: 1.7rem;
    padding: 15px 0 15px;
  }

  @media ${device.smallDevices} {
    font-size: 2rem;
  }

  @media ${device.mediumDevices} {
    font-size: 2.2rem;
    padding: 25px 0 10px;
  }
`;

function AppTitle() {
    return <PageTitle>
    {rainIcon} Weather App {shineIcon}
  </PageTitle>
}

export default AppTitle;