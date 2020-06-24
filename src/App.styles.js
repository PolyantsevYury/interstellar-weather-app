import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${props => props.bgImage});
    background-size: cover;
    height: 100vh;
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #fff;
`;

export const WeatherBlock = styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1000px;
  margin: 40px 0;
  border-radius: 14px;
`;