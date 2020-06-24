import React from 'react';
import {GlobalStyle, AppWrapper, WeatherBlock} from './App.styles'
import BGImage from './img/mars.jpg'
import WeatherData from "./components/WeatherData";

const App = () => {
  return (
      <>
        <GlobalStyle bgImage={BGImage} />
        <AppWrapper>
            <WeatherBlock>
                <h1>
                    Latest weather at Elysium Plantitia
                </h1>
                <h2>
                    561 June 24
                </h2>
                <WeatherData/>
            </WeatherBlock>
        </AppWrapper>
      </>
  );
}

export default App;
