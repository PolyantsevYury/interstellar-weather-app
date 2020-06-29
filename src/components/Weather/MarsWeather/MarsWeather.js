import {Unit} from "./Unit/Unit";
import MarsWeatherData from "./MarsWeatherData";
import React from "react";

export const MarsWeather = ({marsWeather, isMetric, marsLoading, setMetric, selectedSol}) => {
  return (
    marsLoading ? (
        <div>Loading ...</div>
    ) : (
        <>
          <h1 className='weather-title'> Latest weather at
            <span className='weather-title__location'> Elysium Plantitia</span>
          </h1>
          <div className='weather-date'>
            <div>
              <h2>
                {marsWeather[selectedSol].sol || 'sol'}<span> (day on Mars)</span>
              </h2>
              <p>{marsWeather[selectedSol].date || 'date'}</p>
            </div>
            <div className='unit-container'>
              <Unit isMetric={isMetric} setMetric={setMetric}/>
            </div>
          </div>
          <MarsWeatherData sol={marsWeather[selectedSol]} isMetric={isMetric}/>
        </>
    )
  )
}