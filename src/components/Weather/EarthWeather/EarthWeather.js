import React, {useState} from "react";
import {Input} from 'antd';
import {EarthWeatherData} from "./EarthWeatherData";
import {SearchContainer, WeatherTitle} from "../Weather.styles";
import axios from "axios";

export const EarthWeather = ({earthWeather, setEarthWeather, city, setCity}) => {
  const [earthLoading, setEarthLoading] = useState(false);
  const [error, setError] = useState(null);

  const {Search} = Input;

  const fetchEarthData = async city => {
    if (!city) {
      return setError("Please enter the name of the city");
    }
    setEarthLoading(true)
    const url = `https://api.openweathermap.org/data/2.5/` +
        `weather?q=${city}&appid=3d210771b356ac5fbc2fd51f7a263aa2&units=metric`;
    const response = await axios.get(url)
        .catch(error => {
          setEarthLoading(false)
          return setError(error.response.data.message);
    });
    if (!response) {
      return
    }
    setError(null);
    setEarthWeather(response.data.main);
    setCity(response.data.name);
    setEarthLoading(false)
  };

  return (
    <>
      <WeatherTitle>
        {earthWeather == null ? 'Enter the name of the city to get started!'
                              : <>Current weather in <span className='weather-location'>{city}</span></>
        }
      </WeatherTitle>
      <SearchContainer>
        <Search
            onSearch={city => fetchEarthData(city)}
            loading={earthLoading}
            style={{maxWidth: 400, borderRadius: 10}}
            size="large"
        />
        {error !== null && <p className='error'>{error}</p>}
      </SearchContainer>
      {earthWeather !== null && <EarthWeatherData earthWeather={earthWeather}/>}
    </>
  )
}