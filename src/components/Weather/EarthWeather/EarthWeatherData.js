import React from "react";
import {WeatherInstance, WeatherItem, WeatherWrapper} from "../WeatherData.styles";

export const EarthWeatherData = ({earthWeather}) => {
    const {temp, humidity, pressure} = earthWeather

    return (
            <WeatherWrapper>
                <WeatherItem>
                    <div className='weather-instance-container'>
                        <WeatherInstance>
                            <div className='instance-value'>{Math.round(temp)} °C</div>
                            <div className='instance-description'>Temp</div>
                        </WeatherInstance>
                        <WeatherInstance>
                            <div className='instance-value'>{humidity} %</div>
                            <div className='instance-description'>Humidity</div>
                        </WeatherInstance>
                    </div>
                    <WeatherInstance>
                        <div className='instance-value'>{pressure} hPa</div>
                        <div className='instance-description'>Pressure</div>
                    </WeatherInstance>
                </WeatherItem>
            </WeatherWrapper>
    )
}