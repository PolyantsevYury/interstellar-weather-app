import React from 'react';
import {WeatherItem, WeatherWrapper} from "./WeatherData.styles";
import { formatTemperature } from '../helpers';
import currentPhoto from '../img/context_camera.PNG'
import {Popover} from "antd";
import {InfoCircleFilled} from '@ant-design/icons';

const WeatherData = ({ isMetric }) => (
    <WeatherWrapper>
        <WeatherItem>
            <div className='weather-instance'>
                <div className='weather-value'>
                    {formatTemperature(-2, isMetric)}°
                    <span> {isMetric ? ' C' : ' F'} </span>
                </div>
                <div className='description'>High</div>
            </div>
            <div className='weather-instance'>
                <div className='weather-value'>
                    {formatTemperature(-100, isMetric)}°
                    <span> {isMetric ? ' C' : ' F'} </span>
                </div>
                <div className='description'>Low</div>
            </div>
        </WeatherItem>

        <WeatherItem>
            <div className='weather-instance'>
                <div className='weather-value'>5 kph</div>
                <div className='description'>Wind</div>
            </div>
        </WeatherItem>

        <WeatherItem>
            <img className='current-photo' src={currentPhoto} alt="current"/>
            <div className='description'>
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

export default WeatherData;