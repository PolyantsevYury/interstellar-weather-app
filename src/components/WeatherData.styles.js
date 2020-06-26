import styled from 'styled-components';

export const WeatherWrapper = styled.div`
    display: flex;
    padding-bottom: 20px;
`;

export const WeatherItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .weather-instance {
        margin: 0 20px;
    }
    
    .weather-value {
        font-size: 1.7rem;
    }
    
    .description {
        text-align: center;
        font-size: 1.1rem;
        color: #ADADAD;
    }
    
    :nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
    :nth-child(2) {
        --border: 0.25em solid #613131;
        border-left: var(--border);
        border-right: var(--border);
        padding: 0 2em;
    }
    
    :nth-child(3) {
        .current-photo {
            width: 120px;
            border: 1px solid #1E1E1E;
            border-radius: 14px;
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