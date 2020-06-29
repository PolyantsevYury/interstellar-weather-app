import React from 'react';
import {WeatherInstance, WeatherItem, WeatherWrapper} from "../WeatherData.styles";
import { formatTemperature } from '../../../helpers';
import currentPhoto from '../../../img/context_camera.PNG'
import {Popover} from "antd";
import {InfoCircleFilled} from '@ant-design/icons';

const MarsWeatherData = ({ sol, isMetric }) => (
    <WeatherWrapper>
        <WeatherItem>
            <div className='weather-instance-container'>
                <WeatherInstance>
                    <div className='instance-value'>
                        {formatTemperature( sol.maxTemp, isMetric )}
                        <span> {isMetric ? ' °C' : ' °F'} </span>
                    </div>
                    <div className='instance-description'>High</div>
                </WeatherInstance>
                <WeatherInstance>
                    <div className='instance-value'>
                        {formatTemperature( sol.minTemp, isMetric )}
                        <span> {isMetric ? ' °C' : ' °F'} </span>
                    </div>
                    <div className='instance-description'>Low</div>
                </WeatherInstance>
            </div>
            <WeatherInstance>
                <div className='instance-value'>{sol.windSpeed === 'No data' ? 'No data' : `${sol.windSpeed} mph`}</div>
                <div className='instance-description'>Wind</div>
            </WeatherInstance>
        </WeatherItem>

        <WeatherItem>
            <img className='photo' src={currentPhoto} alt="current"/>
            <div className='photo-description'>
                Lander-mounted, Instrument Context Camera (ICC)
                <Popover
                    overlayStyle={{ maxWidth: 220 }}
                    content={'NASA\'s InSight Mars lander acquired this image in front of the lander on June 25'}
                    trigger="hover">
                    <InfoCircleFilled style={{ fontSize: 20, marginLeft: 5, color: '#fff'}}/>
                </Popover>
            </div>
        </WeatherItem>
    </WeatherWrapper>
);

export default MarsWeatherData;