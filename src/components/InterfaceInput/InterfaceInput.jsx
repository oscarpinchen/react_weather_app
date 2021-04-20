import { device } from '../StylesAndTheming/device';
import React from "react";
import styled from "styled-components";

const CityInput = styled.input`
  background: ${({ theme }) => theme.cityInput};
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
  font-size: 0.8rem;
  padding: 10px 0;
  text-align: center;

  @media ${device.extraSmallDevices} {
    font-size: 0.9rem;
    padding: 15px 10px;
  }

  @media ${device.smallDevices} {
    border-radius: 25px 0 0 25px;
    font-size: 1rem;
    padding: 15px 0;
  }
`;

const InputButton = styled.button`
  background: ${({ theme }) => theme.inputButton};
  :hover {
    background: ${({ theme }) => theme.inputButtonHover};
  }
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  :focus {
    outline: none;
  }
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 15px 10px 5px;
  padding: 10px 50px;
  transition: 0.15s;

  @media ${device.extraSmallDevices} {
    font-size: 0.9rem;
    margin: 15px 10px 2px;
    padding: 15px 65px;
  }

  @media ${device.smallDevices} {
    border-radius: 0 25px 25px 0;
    font-size: 1rem;
    margin: 15px 0;
    padding: 15px 44px;
  }
`;

const QueryContainer = styled.div`
  margin: 0 auto 15px;

  @media ${device.extraSmallDevices} {
    margin: 0 auto 15px;
  }

  @media ${device.smallDevices} {
    margin: 0 auto 22px;
  }

  @media ${device.mediumDevices} {
    margin: 0 auto 25px;
  }
`;

function InterfaceInput(props) {
  return (
    <QueryContainer>
      <CityInput
        name="city"
        onChange={props.onChange}
        placeholder="Type your nearest city here!"
        size="35"
        value={props.value}
      />
      <InputButton onClick={props.onClick} type="submit">
        Submit
      </InputButton>
    </QueryContainer>
  );
}

export default InterfaceInput;
