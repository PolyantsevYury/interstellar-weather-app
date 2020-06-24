import React from 'react';
import {Wrapper} from "./WeatherData.styles";

const WeatherData = ({ sol, isMetric }) => (
    <Wrapper>
        <div>
            <h2>Temp</h2>
            <p>
                High:
                <span> -2° </span>
                <span> C </span>
            </p>
            <p>
                Low:
                <span> -100° </span>
                <span> C </span>
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