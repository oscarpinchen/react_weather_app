import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func, string } from 'prop-types';
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
left: 1.1%;
overflow: hidden;
padding: 0.6rem;
position: absolute;
transition-duration: 0.2s;
`

const Toggle = ({theme, toggleTheme}) => {
    return (
        <Button onClick={toggleTheme} >
            {theme === 'light' ? moonIcon : sunIcon}
        </Button>
    )
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;