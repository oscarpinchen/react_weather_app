import { device } from '../StylesAndTheming/device';
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func, string } from "prop-types";
import React from "react";
import styled from "styled-components";

const moonIcon = <FontAwesomeIcon icon={faMoon} />;
const sunIcon = <FontAwesomeIcon icon={faSun} />;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 30px;
  color: ${({ theme }) => theme.togglerText};
  :hover {
    color: ${({ theme }) => theme.togglerHoverText};
  }
  cursor: pointer;
  :focus {
    outline: none;
  }
  font-size: 2rem;
  left: 4.5%;
  overflow: hidden;
  position: absolute;
  top: 2.5%;
  transition-duration: 0.2s;

  @media ${device.extraSmallDevices} {
    top: 3%;
  }

  @media ${device.mediumDevices} {
    left: 1.1%;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? moonIcon : sunIcon}
    </Button>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
