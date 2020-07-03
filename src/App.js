import React, {useEffect, useState} from 'react';
import axios from "axios";
import {GlobalStyle, AppWrapper, WeatherBlock} from './App.styles';
import { ThemeProvider } from 'styled-components';
import {marsTheme, earthTheme} from './theme';
import MarsBGImage from './img/mars.jpg';
import EarthBGImage from './img/earth.jpg';

import {formatDate} from "./helpers";
import {TogglePlanet} from "./components/TogglePlanet/TogglePlanet";
import {Previous} from "./components/Weather/MarsWeather/Previous/Previous";
import {MarsWeather} from "./components/Weather/MarsWeather/MarsWeather";
import {EarthWeather} from "./components/Weather/EarthWeather/EarthWeather";

const App = () => {
  const [planet, setPlanet] = useState(localStorage.getItem('planet') || 'Mars');

  // Earth
  const [earthWeather, setEarthWeather] = useState(null);
  const [city, setCity] = useState(null);

  // Mars
  const [marsWeather, setMarsWeather] = useState([]);
  const [marsLoading, setMarsLoading] = useState(true);
  const [isMetric, setMetric] = useState(true);
  const [selectedSol, setSelectedSol] = useState(); // "Sol" is a Mars solar day

  const fetchMarsData = async () => {
    const url = 'https://api.nasa.gov/insight_weather/' +
        '?api_key=tCe59kbvnGzFzWrvO4ufe1e8g748WbgiR9e5Wr2B&feedtype=json&ver=1.0';
    const request = axios.get(url);
    const response = await request;
    const marsWeather = response.data.sol_keys.map((solKey, i) => {
      return {
        sol: solKey,
        maxTemp: response.data[solKey].AT?.mx || 'No data',
        minTemp: response.data[solKey].AT?.mn || 'No data',
        windSpeed: response.data[solKey].HWS && response.data[solKey].HWS.av
            ? Math.round(response.data[solKey].HWS.av) : 'No data',
        date: formatDate(new Date(response.data[solKey].First_UTC)),
        itemNumber: i,
      };
    });
    setMarsWeather(marsWeather);
    setSelectedSol(marsWeather.length - 1);
    setMarsLoading(false);
  };

  useEffect( () => {
    localStorage.setItem('planet', planet)
  }, [planet]);

  useEffect(() => {
    fetchMarsData();
  }, []);

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <ThemeProvider theme={planet === 'Mars' ? marsTheme : earthTheme}>
      <>
        <GlobalStyle/>
        <img src={MarsBGImage} alt={'#'} className='preloadImage'/>
        <img src={EarthBGImage} alt={'#'} className='preloadImage'/>
        <AppWrapper imageUrl={planet === 'Mars' ? MarsBGImage : EarthBGImage}>
          <div className='content-container'>
            <TogglePlanet planet={planet} setPlanet={setPlanet}/>
            <WeatherBlock>
              {planet === 'Mars'
                  ? <MarsWeather marsWeather={marsWeather}
                                 isMetric={isMetric}
                                 marsLoading={marsLoading}
                                 setMetric={setMetric}
                                 selectedSol={selectedSol}/>
                  : <EarthWeather earthWeather={earthWeather}
                                  setEarthWeather={setEarthWeather}
                                  city={city}
                                  setCity={setCity}/>
              }
            </WeatherBlock>
          </div>
          {(planet === 'Mars' && !marsLoading) &&
          <Previous marsWeather={marsWeather}
                    setSelectedSol={setSelectedSol}
                    isMetric={isMetric}
          />}
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;