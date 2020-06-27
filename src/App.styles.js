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
        background: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${props => props.bgImage});
        background-size: cover;
        background-attachment: fixed;
        font-size: 1rem;
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
    padding: 60px 20px 4px 20px;
    color: #F4F4F4;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
`;

export const WeatherBlock = styled.main`
    background: rgba(0, 0, 0, 0.7);
    padding: 2em;
    width: 100%;
    max-width: 1000px;
    border-radius: 14px;
    border: 1px solid #1E1E1E;
    display: flex;
    flex-direction: column;
    
    .weather-title {
        align-self: center;
        font-size: var(--fs-h1);
        font-weight: var(--fw-light);
        letter-spacing: 2px;
        color: #CDCDCD;
        }
        
        .weather-title__location {
            color: #d06d6d;
            text-transform: uppercase;
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
    
`;