import React, {useState} from 'react';
import {GlobalStyle, AppWrapper, WeatherBlock} from './App.styles'
import BGImage from './img/mars.jpg'
import WeatherData from "./components/WeatherData";
import Previous from "./components/Previous";
import 'antd/dist/antd.css';
import Unit from "./components/Unit";

const App = () => {
    const [isMetric, setMetric] = useState(true);
  return (
      <>
        <GlobalStyle bgImage={BGImage} />
        <AppWrapper>
            <WeatherBlock>
                <h1 className='weather-title'>
                    Latest weather at <span>Elysium Plantitia</span>
                </h1>
                <div className='weather-date'>
                    <div>
                        <h2>
                            561 Sol<span> (day on Mars)</span>
                        </h2>
                        <p>June 24</p>
                    </div>
                    <div>
                        <Unit isMetric={isMetric} setMetric={setMetric} />
                    </div>
                </div>
                <WeatherData isMetric={isMetric} />
            </WeatherBlock>
            <Previous isMetric={isMetric} />
        </AppWrapper>
      </>
  );
}

export default App;