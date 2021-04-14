import { faSun, faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../Footer/Footer'
import { GlobalStyles } from "../Styles-and-Theming/globalStyles";
import { useDarkMode } from "../Styles-and-Theming/useDarkMode";
import { lightTheme, darkTheme } from "../Styles-and-Theming/themes";
import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Toggle from '../Toggler/themeToggler'

const rainIcon = <FontAwesomeIcon icon={faCloudShowersHeavy}/>
const shineIcon = <FontAwesomeIcon icon={faSun}/>

const CityInput=styled.input`
background: ${({theme}) => theme.cityInput};
border: none;
border-radius: 25px 0 0 25px;
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

const MainContainer=styled.div`
background-color: ${({theme}) => theme.mainContainer};
border-radius: 10px;
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

const QueryContainer=styled.div`
margin: 0 auto 40px;
`

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

const WeatherContainer=styled.div`
background-color: ${({theme}) => theme.weatherContainer};
border-radius: 10px;
bottom: 5px;
box-shadow: 0 0 20px ${({theme}) => theme.shadowShade};
height: 450px;
margin: 0 auto;
max-width: 465px;
`

function App() {

    const [theme, themeToggler, mountedComponent] = useDarkMode();
    
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    const apiKey = 'da6e6d8cda1dc531056226657c63ba9f';
    const [cityName, setCityName] = useState("");
    const [units, setUnits] = useState('Metric');

    const [description, setDescription] = useState();
    const [icon, setIcon] = useState();
    const [pressure, setPressure] = useState();
    const [temperature, setTemperature] = useState();
    const [windDirection, setWindDirection] = useState();
    const [windSpeed, setWindSpeed] = useState();

    function handleChange(event) {
        setCityName(event.target.value);
    }

    const handleClick = async () => {
        const response = await fetch(
            'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=' + units + '&appid=' + apiKey
        );
        if (response.ok) {
            const data = await response.json();
            setDescription(data.weather[0].description);
            setIcon(data.weather[0].icon);
            setPressure(data.main.pressure);
            setTemperature(data.main.temp);
            setWindDirection(data.wind.deg);
            setWindSpeed(data.wind.speed);
        }
    };

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
                <UnitToggler onClick={toggleUnits}>{units}</UnitToggler>
                <MainContainer>
                    <PageTitle>{rainIcon} Weather App {shineIcon}</PageTitle>
                    <QueryContainer>
                        <CityInput
                        name="city"
                        onChange={handleChange}
                        placeholder="Type your nearest city here!"
                        size="35"
                        value={cityName}
                        />
                        <InputButton
                        onClick={handleClick}
                        type="submit"
                        >Submit</InputButton>
                    </QueryContainer>
                    <WeatherContainer></WeatherContainer>
                </MainContainer>
                <Footer/>
            </>
        </ThemeProvider>
        </div>
}

export default App;