import React, {useEffect, useState} from 'react';
import {GlobalStyle, AppWrapper, WeatherBlock} from './App.styles'
import BGImage from './img/mars.jpg'
import WeatherData from "./components/WeatherData";
import Previous from "./components/Previous";
import 'antd/dist/antd.css';
import Unit from "./components/Unit";
import { MARS_API_URL } from './api';
import { formatDate } from './helpers';
import {TogglePlanet} from "./components/TogglePlanet";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [isMetric, setMetric] = useState(true);
    const [weather, setWeather] = useState([]);
    const [selectedSol, setSelectedSol] = useState(); // "Sol" is a Mars solar day
    console.log(weather);

    useEffect(() => {
        const fetchFromAPI = async () => {
            const weather = await (await fetch(MARS_API_URL)).json();
            const marsWeather = weather.sol_keys.map((solKey, i) => {
                return {
                    sol: solKey,
                    maxTemp: weather[solKey].AT?.mx || 'No data',
                    minTemp: weather[solKey].AT?.mn || 'No data',
                    windSpeed: weather[solKey].HWS && weather[solKey].HWS.av ? Math.round(weather[solKey].HWS.av) : 'No data',
                    date: formatDate(new Date(weather[solKey].First_UTC)),
                    itemNumber: i,
                };
            });
            setWeather(marsWeather);
            setSelectedSol(marsWeather.length - 1);
            setLoading(false);
        };

        fetchFromAPI();
    }, []);

    return (
        <>
            <GlobalStyle bgImage={BGImage}/>
            <AppWrapper>
                <div className='content-container'>
                    <TogglePlanet/>
                    <WeatherBlock>
                        {loading ? (
                            <div>Loading ...</div>
                        ) : (
                            <>
                                <h1 className='weather-title'> Latest weather at
                                    <span className='weather-title__location'> Elysium Plantitia</span>
                                </h1>
                                <div className='weather-date'>
                                    <div>
                                        <h2>
                                            {weather[selectedSol].sol || 'sol'}<span> (day on Mars)</span>
                                        </h2>
                                        <p>{weather[selectedSol].date || 'date'}</p>
                                    </div>
                                    <div>
                                        <Unit isMetric={isMetric} setMetric={setMetric}/>
                                    </div>
                                </div>
                                <WeatherData sol={weather[selectedSol]} isMetric={isMetric}/>
                            </>
                        )}
                    </WeatherBlock>
                </div>
                <Previous weather={weather}
                          setSelectedSol={setSelectedSol}
                          isMetric={isMetric}
                          loading={loading}
                />
            </AppWrapper>
        </>
    );
}

export default App;