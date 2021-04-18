import React from 'react';
import styled from 'styled-components';

const ForecastDescription=styled.h3`
color: ${({theme}) => theme.description};
font-weight: 400;
margin: 0;
`

const ForecastHeading=styled.h1`
color: ${({theme}) => theme.headingText};
font-size: 2.5rem;
font-weight: 500;
margin: 0;
padding: 10px 0 0 20px;
text-align: left;
`

const ForecastIcon=styled.img`
width: 150px;
`

const ForecastReadingHeading=styled.td`
color: ${({theme}) => theme.description};
padding-bottom: 5px;
`

const ForecastReadings=styled.td`
color: ${({theme}) => theme.text};
padding: 0 25px;
`

const ForecastSubContainer=styled.table`
align-content: center;
background-color: ${({theme}) => theme.subContainer};
border-radius: 5px;
margin: 50px auto 0;
min-width: 435px;
padding: 18px 0;
text-align: center;
`

const ForecastTemp=styled.h1`
font-size: 2.5rem;
margin: 0;
`

const WeatherContainer=styled.div`
background-color: ${({theme}) => theme.weatherContainer};
border-radius: 10px;
bottom: 5px;
box-shadow: 0 0 20px ${({theme}) => theme.shadowShade};
height: 450px;
margin: 0 auto;
max-width: 465px;
`

function InterfaceOutput(props) {
    return <WeatherContainer>
    <ForecastHeading>{props.headingCity} {props.nation}</ForecastHeading>
    <ForecastIcon src={props.icon === "" ? "" : props.imageURL}/>
    <ForecastTemp>{props.temperature}{props.tempUnits}</ForecastTemp>
    <ForecastDescription>{props.description}</ForecastDescription>
    {props.pressure && (<ForecastSubContainer>
        <tr>
            <ForecastReadingHeading>{props.pressure === "" ? "" : "Pressure"}</ForecastReadingHeading>
            <ForecastReadingHeading>{props.windSpeed === "" ? "" : "Wind Speed"}</ForecastReadingHeading>
            <ForecastReadingHeading>{props.windDirection === "" ? "" : "Wind Direction"}</ForecastReadingHeading>
        </tr>
        <tr>
            <ForecastReadings>{props.pressure}{props.pressure === "" ? "" : " millibars"}</ForecastReadings>
            <ForecastReadings>{props.windSpeed} {props.speedUnits}</ForecastReadings>
            <ForecastReadings>{props.windDirection}{props.windDirection === "" ? "" : " degrees"}</ForecastReadings>
        </tr>
    </ForecastSubContainer>)}
</WeatherContainer>
}

export default InterfaceOutput;