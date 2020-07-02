import {Unit} from "./Unit/Unit";
import MarsWeatherData from "./MarsWeatherData";
import React from "react";
import {SectionTitle, WeatherTitle} from "../Weather.styles";
import {Spin} from "antd";

export const MarsWeather = ({marsWeather, isMetric, marsLoading, setMetric, selectedSol}) => {
  return (
      <>
        <WeatherTitle> Latest weather at
          <span className='weather-location'> Elysium Plantitia</span>
        </WeatherTitle>
        {marsLoading ? (
            <div className='loading'>
              <Spin size="large"/>
            </div>
        ) : (
            <>
              <SectionTitle>
                <div>
                  <h2>
                    {marsWeather[selectedSol].sol || 'sol'}<span> (day on Mars)</span>
                  </h2>
                  <p>{marsWeather[selectedSol].date || 'date'}</p>
                </div>
                <div className='unit-container'>
                  <Unit isMetric={isMetric} setMetric={setMetric}/>
                </div>
              </SectionTitle>
              <MarsWeatherData sol={marsWeather[selectedSol]} isMetric={isMetric} selectedSol={selectedSol}/>
            </>
        )}
      </>
  )
}