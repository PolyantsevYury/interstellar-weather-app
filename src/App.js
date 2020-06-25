import React from 'react';
import {GlobalStyle, AppWrapper, WeatherBlock} from './App.styles'
import BGImage from './img/mars.jpg'
import WeatherData from "./components/WeatherData";
import Previous from "./components/Previous";
import 'antd/dist/antd.css';

const App = () => {
  return (
      <>
        <GlobalStyle bgImage={BGImage} />
        <AppWrapper>
            <WeatherBlock>
                <h1 className='weather-title'>
                    Latest weather at Elysium Plantitia
                </h1>
                <h2>
                    561 June 24
                </h2>
                <WeatherData/>
            </WeatherBlock>
            <Previous/>
        </AppWrapper>
      </>
  );
}

export default App;