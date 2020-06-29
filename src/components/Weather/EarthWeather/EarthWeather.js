import React from "react";
import {Input} from 'antd';
import {EarthWeatherData} from "./EarthWeatherData";

export const EarthWeather = ({fetchEarthData, earthWeather, city, error}) => {
    const { Search } = Input;

    return (
        <>
            <h1 className='weather-title'>
                { earthWeather == null ? 'Enter the name of the city to get started!'
                                       : <>Current weather in <span className='weather-title__location'>{city}</span></>
                }
            </h1>
            <div className='search-container'>
                <Search
                    onSearch={city => fetchEarthData(city)}
                    style={{maxWidth: 400, borderRadius: 10}}
                    size="large"
                />
                { error !== null && <p>{error}</p> }
            </div>
            { earthWeather !== null && <EarthWeatherData earthWeather={earthWeather} /> }
        </>
    )
}