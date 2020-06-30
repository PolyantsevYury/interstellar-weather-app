import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
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
  
  html {
    height: 100%;
  }
  
  body {
    height: 100%;
  }
  
  body:before {
    content: "";
    z-index: -1;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.4)), url(${props => props.imageUrl});
    // background-position: ${({theme}) => theme.backgroundPosition};
    background-position: center;
  }
  
  .preloadImage {
    display: none;
  }
  
  h1, h2, h3, h4 {
    line-height: 1;
    color: #F4F4F4;
    margin: 0;
  }
  
  p {
    margin: 0;
  }
`;

export const AppWrapper = styled.div`

  height: 100vh;
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
  
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh
  }
`;