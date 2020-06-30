import styled from 'styled-components';

export const WeatherWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
    
    @media (max-width: 767px) {
      margin-bottom: 0;
    }
  }
  
  .photo {
    width: 160px;
    border: 1px solid #1E1E1E;
    border-radius: 8px;
  }
  
  .photo-description {
    text-align: center;
    margin-top: 10px;
    width: 190px;
    font-size: 0.9rem;
    color: #ADADAD;
  }
`;

export const WeatherInstance = styled.div`
  margin: 0 20px;

  .instance-value {
    font-size: 1.7rem;
    display: flex;
    justify-content: center;
    
    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  }
  
  .instance-description {
    text-align: center;
    font-size: 1.1rem;
    color: #ADADAD;
  }
`;