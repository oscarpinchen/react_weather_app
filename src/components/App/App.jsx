import AppTitle from '../AppTitle/AppTitle';
import { device } from '../StylesAndTheming/device';
import Footer from "../Footer/Footer";
import { GlobalStyles } from "../StylesAndTheming/globalStyles";
import InterfaceInput from "../InterfaceInput/InterfaceInput";
import InterfaceOutput from "../InterfaceOuput/InterfaceOutput";
import { lightTheme, darkTheme } from "../StylesAndTheming/themes";
import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Toggle from "../Togglers/themeToggler";
import UnitToggle from "../Togglers/unitToggle";
import { useDarkMode } from "../StylesAndTheming/useDarkMode";

const MainContainer = styled.div`
  background-color: ${({ theme }) => theme.mainContainer};
  border-radius: 15px;
  box-shadow: 0 0 20px ${({ theme }) => theme.shadowShade};
  height: 490px;
  margin: 70px auto 15px;
  max-width: 300px;
  min-width: 298px;
  padding: 0 10px;
  text-align: center;
  transition: 0.15s;

  @media ${device.extraSmallDevices} {
    height: 570px;
    margin: 80px auto 15px;
    max-width: 450px;
  }

  @media ${device.smallDevices} {
    height: 602px;
    margin: 80px auto 15px;
    max-width: 500px;
  }

  @media ${device.mediumDevices} {
    height: 650px;
    margin: 15px auto 15px;
  }

  @media ${device.largeDevices} {
    height: 650px;
    margin: 15px auto 15px;
  }

  @media ${device.extraLargeDevices} {
    height: 650px;
    margin: 15px auto 15px;
  }
`;

function App() {

  // Dark/Light Mode functionality

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  // API const components

  const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  const [cityName, setCityName] = useState();
  const [units, setUnits] = useState("Metric");

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
  const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  function handleChange(event) {
    setCityName(event.target.value);
  }

  // API request functionality

  const handleClick = async () => {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        cityName +
        "&units=" +
        units +
        "&appid=" +
        apiKey
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
      setHeadingCity(cityName[0].toUpperCase() + cityName.substring(1) + ", ");
      if (units === "Metric") {
        setSpeedUnits(" kph");
        setTempUnits(" Celcius");
      } else {
        setSpeedUnits(" mph");
        setTempUnits(" Fahrenheit");
      }
      console.log(data);
    }
  };

  // Unit Toggle functionality

  function toggleUnits() {
    if (units === "Metric") {
      setUnits("Imperial");
    }
    if (units === "Imperial") {
      setUnits("Metric");
    }
  }

  if (!mountedComponent) return null;
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={themeToggler} />
          <UnitToggle onClick={toggleUnits} toggleContent={units} />
          <MainContainer>
            <AppTitle/>
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
          <Footer />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
