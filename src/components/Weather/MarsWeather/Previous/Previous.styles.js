import styled from 'styled-components';

export const PreviousWrapper = styled.div`
  width: 100%;
  
  .previous-title {
    color: #fff;
    margin: 20px 40px;
    
    @media (max-width: 767px) {
      margin: 20px 0;
    }
  }
`;

export const PreviousDays = styled.div`
  overflow-x: scroll;
  text-align: center;
`;

export const PreviousDay = styled.div`
  .previous-day__date {
    font-size: 0.9 rem;
    color: #ADADAD;
    margin-bottom: 10px;
  }
  
  .previous-day__temp {
    color: #CDCDCD;
    font-size: 16px;
  }
  
  .previous-day__more-info {
    line-height: 30px;
    height: 30px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    color: #FFF;
    transition: all 0.3s;
    position: relative;
    margin-top: 10px;
    
    span {
      color: #ADADAD;
    }
    
    :before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-style: solid;
      border-bottom-style: solid;
      border-top-color: rgba(255,255,255,0.5);
      border-bottom-color: rgba(255,255,255,0.5);
      transform: scale(0.1, 1);
    }
    
    :hover span {
      letter-spacing: 2px;
      color: #fff;
    }
    
    :hover::before {
      opacity: 1; 
      transform: scale(1, 1); 
    }
    
    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      transition: all 0.3s;
      background-color: rgba(255,255,255,0.1);
    }
    
    :hover::after {
      opacity: 0; 
      transform: scale(0.1, 1);
    }
  }
`;