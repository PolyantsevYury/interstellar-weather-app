import React from "react";
import {Input} from 'antd';
import {EarthWeatherData} from "./EarthWeatherData";
import {SearchContainer, WeatherTitle} from "../Weather.styles";

export const EarthWeather = ({fetchEarthData, earthWeather, city, error}) => {
  const {Search} = Input;

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
            style={{maxWidth: 400, borderRadius: 10}}
            size="large"
        />
        {error !== null && <p>{error}</p>}
      </SearchContainer>
      {earthWeather !== null && <EarthWeatherData earthWeather={earthWeather}/>}
    </>
  )
}