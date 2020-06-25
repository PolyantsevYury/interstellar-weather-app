import React from 'react';
import {Wrapper} from "./WeatherData.styles";
import { formatTemperature } from '../helpers';

const WeatherData = ({ isMetric }) => (
    <Wrapper>
        <div>
            <h2>Temp</h2>
            <p>
                High:
                <span> {formatTemperature(-2, isMetric)} </span>°
                <span> {isMetric ? ' C' : ' F'} </span>
            </p>
            <p>
                Low:
                <span> {formatTemperature(-100, isMetric)}</span>°
                <span> {isMetric ? ' C' : ' F'} </span>
            </p>
        </div>

        <div>
            <h2>Wind</h2>
            <p>
                <span>5</span>
                <span>kph</span>
            </p>

            <div>
                <div> Wind arrow</div>
            </div>
        </div>
    </Wrapper>
);

export default WeatherData;