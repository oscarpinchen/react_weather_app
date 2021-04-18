import React from 'react';
import styled from 'styled-components';

const CityInput=styled.input`
background: ${({theme}) => theme.cityInput};
border: none;
border-radius: 25px 0 0 25px;
color: ${({theme}) => theme.text};
font-size: 1rem;
padding: 15px 0;
text-align: center;
`

const InputButton=styled.button`
background: ${({theme}) => theme.inputButton};
:hover {
    background: ${({ theme }) => theme.inputButtonHover};
  }
border: none;
border-radius: 0 25px 25px 0;
color: ${({theme}) => theme.text};
cursor: pointer;
  :focus {
    outline: none;
  }
font-size: 1rem;
font-weight: 600;
letter-spacing: 1px;
padding: 15px 44px;
transition: 0.15s;
`

const QueryContainer=styled.div`
margin: 0 auto 40px;
`

function InterfaceInput(props) {
    return <QueryContainer>
                <CityInput
                name="city"
                onChange={props.onChange}
                placeholder="Type your nearest city here!"
                size="35"
                value={props.value}
                />
                <InputButton
                onClick={props.onClick}
                type="submit"
                >Submit
                </InputButton>
            </QueryContainer>
}

export default InterfaceInput;