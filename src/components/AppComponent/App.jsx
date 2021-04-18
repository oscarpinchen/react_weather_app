import { faSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer'
import { GlobalStyles } from "../StylesAndTheming/globalStyles";
import InterfaceInput from '../InterfaceInput/InterfaceInput';
import InterfaceOutput from '../InterfaceOuput/InterfaceOutput';
import { lightTheme, darkTheme } from "../StylesAndTheming/themes";
import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Toggle from '../Togglers/themeToggler'
import UnitToggle from '../Togglers/unitToggle'
import { useDarkMode } from "../StylesAndTheming/useDarkMode";

const rainIcon = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
const shineIcon = <FontAwesomeIcon icon={faSun}/>

const MainContainer=styled.div`
background-color: ${({theme}) => theme.mainContainer};
border-radius: 15px;
box-shadow: 0 0 20px ${({theme}) => theme.shadowShade};
height: 90vh;
margin: 15px auto 15px;
max-width: 500px;
text-align: center;
`

const PageTitle=styled.h1`
color: ${({theme}) => theme.headingText};
padding: 23px 0 23px;
font-size: 2.2rem;
font-weight: 900;
letter-spacing: 4px;
margin: 0;
`

function App() {

    // Dark/Light Mode functionality

    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    // API const components

    const apiKey = 'da6e6d8cda1dc531056226657c63ba9f';
    const [cityName, setCityName] = useState();
    const [units, setUnits] = useState('Metric');

    // API data components

    const [nation, setNation] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [pressure, setPressure] = useState("");
    const [temperature, setTemperature] = useState("");
    const [windDirection, setWindDirection] = useState("");
    const [windSpeed, setWindSpeed] = useState("");

    // Interface change components

    const [headingCity, setHeadingCity] = useState("");
    const [speedUnits, setSpeedUnits] = useState("");
    const [tempUnits, setTempUnits] = useState("");
    const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

    function handleChange(event) {
        setCityName(event.target.value);
    }

    // API request functionality

    const handleClick = async () => {
        const response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=' + units + '&appid=' + apiKey
        );
        if (response.ok) {
            const data = await response.json();
            setNation(data.sys.country);
            setDescription(data.weather[0].description);
            setIcon(data.weather[0].icon);
            setPressure(data.main.pressure);
            setTemperature(data.main.temp);
            setWindDirection(data.wind.deg);
            setWindSpeed(data.wind.speed);
            setHeadingCity(cityName[0].toUpperCase() + cityName.substring(1) + ', ');
                if (units === "Metric") {
                    setSpeedUnits(" mph")
                    setTempUnits(" Celcius")
                } else {
                    setSpeedUnits(" kph")
                    setTempUnits(" Fahrenheit")
                }
                console.log(data);
        }
    };

    // Unit Toggle functionality

    function toggleUnits() {
        if (units === 'Metric') {
            setUnits('Imperial')
        } if (units === 'Imperial') {
            setUnits('Metric')
        }
    }
    
    if(!mountedComponent) return <div/>
    return <div>
        <ThemeProvider theme={themeMode}>
            <>
            <GlobalStyles/>
                <Toggle theme={theme} toggleTheme={themeToggler} />
                <UnitToggle
                onClick={toggleUnits}
                toggleContent={units}
                />
                <MainContainer>
                    <PageTitle>{rainIcon} Weather App {shineIcon}</PageTitle>
                        <InterfaceInput
                        onChange={handleChange}
                        onClick={handleClick}
                        value={cityName}
                        />
                    <InterfaceOutput
                    description={description}
                    headingCity={headingCity}
                    icon={icon}
                    imageURL={imageURL}
                    nation={nation}
                    pressure={pressure}
                    speedUnits={speedUnits}
                    temperature={temperature}
                    tempUnits={tempUnits}
                    windDirection={windDirection}
                    windSpeed={windSpeed}
                    />
                </MainContainer>
                <Footer/>
            </>
        </ThemeProvider>
        </div>
}

export default App;