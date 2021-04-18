import React from 'react';
import styled from 'styled-components';

const UnitToggler=styled.button`
background: ${({theme}) => theme.inputButton};
:hover {
    background: ${({ theme }) => theme.inputButtonHover};
  }
border: none;
border-radius: 25px;
box-shadow: 0 0 20px ${({theme}) => theme.shadowShade};
color: ${({theme}) => theme.text};
cursor: pointer;
  :focus {
    outline: none;
  }
font-size: 1rem;
font-weight: 600;
letter-spacing: 1px;
padding: 15px 44px;
position: absolute;
right: 1.1%;
top: 2.5%;
transition: 0.15s;
`

function UnitToggle(props) {

    return <UnitToggler onClick={props.onClick}>{props.toggleContent}</UnitToggler>
}

export default UnitToggle;