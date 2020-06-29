import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
    
  :root {
    --fw-light: 300;
    --fw-normal: 400;
    --fw-semi: 500;
    --fw-bold: 700;
    --fs-h1: 1.5rem;
    --fs-h2: 2.25rem;
    --fs-body: 1rem;
    --fs-xl: 4.5rem;
  }

  body {
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${props => props.imageUrl});
    background-size: cover;
    background-attachment: fixed;
    background-position: ${({theme}) => theme.backgroundPosition};
  }
  
  .preloadImage {
    display: none;
  }
  
  h1, h2, h3, h4 {
    line-height: 1;
    color: #F4F4F4;
  }
`;

export const AppWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
  color: #F4F4F4;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6;
    
  @media (max-width: 767px) {
    padding: 6px 6px 0 6px;
  }
  
  .content-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const WeatherBlock = styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  margin-top: 20px;
  border-radius: 14px;
  border: 1px solid #1E1E1E;
  display: flex;
  width: 100%;
  max-width: 1000px;
  flex-direction: column;
  
  @media (max-width: 767px) {
    margin-top: 6px;
  }
  
  .weather-title {
    align-self: center;
    text-align: center;
    font-size: var(--fs-h1);
    font-weight: var(--fw-semi);
    margin-bottom: 20px;
    color: #CDCDCD;
    }
    
    .weather-title__location {
      color: ${({theme}) => theme.themeColor};
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }
  
  .weather-date {
    display: flex;
    justify-content: space-between;
    
    h2 {
      margin: 0;
    }
    p {
      color: #ADADAD;
      font-size: 1.1rem;
      margin: 0;
    }
    span {
      font-size: var(--fs-body);
      color: #ADADAD;
    }
  }
  
  .search-container {
    margin: 20px 0 20px 0;
    text-align: center;
  }
  
  .unit-container {
    display: flex;
    align-items: center;
  }
`;