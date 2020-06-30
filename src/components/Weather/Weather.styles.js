import styled from 'styled-components';

export const WeatherTitle = styled.h1`
  align-self: center;
  text-align: center;
  font-size: var(--fs-h1);
  font-weight: var(--fw-semi);
  margin-bottom: 20px;
  color: #CDCDCD;
  line-height: 1.2;
  
  @media (max-width: 767px) {
    font-size: 1.3rem;
  }
  
  .weather-location {
    color: ${({theme}) => theme.themeColor};
    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  
  p {
    color: #ADADAD;
    font-size: 1.1rem;
  }
  
  span {
    font-size: var(--fs-body);
    color: #ADADAD;
  }
  
  .unit-container {
    display: flex;
    align-items: center;
  }
`;

export const SearchContainer = styled.div`
  margin: 20px 0;
  text-align: center;
  
  .error {
    font-size: 1.2rem;
    color: #fff;
  }
`;