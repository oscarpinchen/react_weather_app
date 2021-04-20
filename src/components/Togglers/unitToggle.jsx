import { device } from '../StylesAndTheming/device';
import React from "react";
import styled from "styled-components";

const UnitToggler = styled.button`
  background: ${({ theme }) => theme.inputButton};
  :hover {
    background: ${({ theme }) => theme.inputButtonHover};
  }
  border: none;
  border-radius: 25px;
  box-shadow: 0 0 20px ${({ theme }) => theme.shadowShade};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  :focus {
    outline: none;
  }
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 10px 40px;
  position: absolute;
  right: 7%;
  top: 2.5%;
  transition: 0.35s;

  @media ${device.extraSmallDevices} {
    padding: 12px 30px;
  }

  @media ${device.mediumDevices} {
    padding: 15px 24px;
    right: 2%;
  }

  @media ${device.largeDevices} {
    padding: 15px 34px;
    right: 2%;
  }

  @media ${device.extraLargeDevices} {
    padding: 15px 44px;
    right: 2%;
  }
`;

function UnitToggle(props) {
  return (
    <UnitToggler onClick={props.onClick}>{props.toggleContent}</UnitToggler>
  );
}

export default UnitToggle;
