import { device } from '../StylesAndTheming/device';
import React from "react";
import styled from "styled-components";

const ForecastDescription = styled.h3`
  color: ${({ theme }) => theme.description};
  font-weight: 400;
  margin: 0;
`;

const ForecastHeading = styled.h1`
  color: ${({ theme }) => theme.headingText};
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0;
  padding: 10px 0 0 15px;
  text-align: left;

  @media ${device.extraSmallDevices} {
    font-size: 2rem;
    padding: 10px 0 0 18px;
  }

  @media ${device.smallDevices} {
    font-size: 2.5rem;
    padding: 10px 0 0 22px;
  }
`;

const ForecastIcon = styled.img`
  margin: 0;

  @media ${device.extraSmallDevices} {
    width: 115px;
  }

  @media ${device.smallDevices} {
    width: 150px;
  }
`;

const ForecastReadingHeading = styled.td`
  color: ${({ theme }) => theme.description};
  margin: 0 20px;

  @media ${device.extraSmallDevices} {
    padding: 0 4px;
  }

  @media ${device.smallDevices} {
    padding: 0 25px;
  }
`;

const ForecastReadings = styled.td`
  color: ${({ theme }) => theme.text};
  margin: 0 20px;

  @media ${device.extraSmallDevices} {
    padding: 0 4px;
  }

  @media ${device.smallDevices} {
    padding: 0 25px;
  }
`;

const ForecastSubContainer = styled.table`
  align-content: center;
  background-color: ${({ theme }) => theme.subContainer};
  border-radius: 5px;
  border-spacing: 5px;
  display: inline-block;
  font-size: 0.8rem;
  margin: 20px auto 0;
  max-width: 300px;
  padding: 15px 15px;
  text-align: center;
  transition: 0.15s;

  @media ${device.extraSmallDevices} {
    border-radius: 20px;
    margin: 20px 10px 0;
    max-width: 520px;
    padding: 15px 5px;
  }
  
  @media ${device.smallDevices} {
    border-radius: 5px;
    font-size: 1rem;
  }

  @media ${device.mediumDevices} {
    margin: 60px auto 0;
    padding: 7px 0;
  }
`;

const ForecastTemp = styled.h1`
  font-size: 1.5rem;
  margin: 0;

  @media ${device.extraSmallDevices} {
    font-size: 2rem;
  }

  @media ${device.smallDevices} {
    font-size: 2.5rem;
  }
`;

const WeatherContainer = styled.div`
  background-color: ${({ theme }) => theme.weatherContainer};
  border-radius: 10px;
  bottom: 5px;
  box-shadow: 0 0 20px ${({ theme }) => theme.shadowShade};
  height: 315px;
  margin: 0 auto;
  max-width: 300px;
  transition: 0.15s;

  @media ${device.extraSmallDevices} {
    height: 358px;
    max-width: 400px;
  }

  @media ${device.smallDevices} {
    height: 415px;
    max-width: 485px;
  }

  @media ${device.mediumDevices} {
    height: 445px;
  }
`;

function InterfaceOutput(props) {
  return (
    <WeatherContainer>
      <ForecastHeading>
        {props.headingCity} {props.nation}
      </ForecastHeading>
      <ForecastIcon src={props.icon === "" ? "" : props.imageURL} />
      <ForecastTemp>
        {props.temperature}
        {props.tempUnits}
      </ForecastTemp>
      <ForecastDescription>{props.description}</ForecastDescription>
      {props.pressure && (
        <ForecastSubContainer>
          <tr>
          {props.pressure && <ForecastReadingHeading>Pressure</ForecastReadingHeading>}
            {props.headingCity && <ForecastReadingHeading>Wind Speed</ForecastReadingHeading>}
            {props.headingCity && <ForecastReadingHeading>Wind Direction</ForecastReadingHeading>}
          </tr>
          <tr>
            {props.headingCity && <ForecastReadings>{props.pressure} millibars</ForecastReadings>}
            <ForecastReadings>{props.windSpeed} {props.speedUnits}</ForecastReadings>
            {props.headingCity && <ForecastReadings>{props.windDirection} Degrees</ForecastReadings>}
          </tr>
        </ForecastSubContainer>
      )}
    </WeatherContainer>
  );
}

export default InterfaceOutput;
