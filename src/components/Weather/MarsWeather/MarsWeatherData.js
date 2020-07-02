import React from 'react';
import {WeatherInstance, WeatherItem, WeatherWrapper} from "../WeatherData.styles";
import {formatTemperature} from '../../../helpers';
import {Popover} from "antd";
import PhotoBlur from '../../../img/icc_blur.png';
import {InfoCircleFilled} from '@ant-design/icons';

const MarsWeatherData = ({sol, isMetric, selectedSol}) => {
  return (
      <WeatherWrapper>
        <WeatherItem>
          <div className='weather-instance-container'>
            <WeatherInstance>
              <div className='instance-value'>
                {formatTemperature(sol.maxTemp, isMetric)}
                <span> {isMetric ? ' °C' : ' °F'} </span>
              </div>
              <div className='instance-description'>High</div>
            </WeatherInstance>
            <WeatherInstance>
              <div className='instance-value'>
                {formatTemperature(sol.minTemp, isMetric)}
                <span> {isMetric ? ' °C' : ' °F'} </span>
              </div>
              <div className='instance-description'>Low</div>
            </WeatherInstance>
          </div>
          <WeatherInstance>
            <div className='instance-value'>{sol.windSpeed === 'No data' ? 'No data'
                                                                         : `${sol.windSpeed} mph`}</div>
            <div className='instance-description'>Wind</div>
          </WeatherInstance>
        </WeatherItem>

        <WeatherItem PhotoBlur={PhotoBlur}>
          <div className='photo-wrapper'>
            <img className='photo' key={selectedSol}
                 src={require(`../../../img/icc_${selectedSol}.png`)} alt="No data"/>
          </div>
          <div className='photo-description'>
            Lander-mounted, Instrument Context Camera (ICC)
            <Popover
                overlayStyle={{maxWidth: 220}}
                content={`NASA's InSight Mars lander acquired this image in front of the lander on ${sol.date}`}
                trigger="hover">
              <InfoCircleFilled style={{fontSize: 20, marginLeft: 5, color: '#fff'}}/>
            </Popover>
          </div>
        </WeatherItem>
      </WeatherWrapper>
  );
}

export default MarsWeatherData;