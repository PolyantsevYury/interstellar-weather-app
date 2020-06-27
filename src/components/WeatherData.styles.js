import styled from 'styled-components';

export const WeatherWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .WeatherItem + WeatherItem {
        border-left: 0.25em solid #613131;
    }
`;

export const WeatherItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 20px 0 20px;
    width: 240px;
    
    .weather-instance-container {
        display: flex;
        margin-bottom: 10px;
    }
    
    .weather-instance {
        margin: 0 20px;
    }
    
    .weather-value {
        font-size: 1.7rem;
        display: flex;
    }
    
    .description {
        text-align: center;
        font-size: 1.1rem;
        color: #ADADAD;
    }
    
    :nth-child(1) {
    }
    
    :nth-child(2) {
        .current-photo {
            width: 160px;
            border: 1px solid #1E1E1E;
            border-radius: 8px;
        }
        
        .description {
            text-align: center;
            margin-top: 10px;
            width: 190px;
            font-size: 0.9rem;
            color: #ADADAD;
        }
    }
`;