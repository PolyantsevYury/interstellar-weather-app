import styled from "styled-components";

export const ToggleWrapper = styled.div`
  overflow: hidden;
  padding: 0 70px;
  height: 40px;
      
  input {
    position: absolute;
    left: -99em;
  }
  
  .toggle {
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 40px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 84px;
    transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  .toggle:before {
    content: 'EARTH';
    position: absolute;
    left: -70px;
    top: 5px;
    font-size: 18px;
    color: #fff;
  }
  .toggle:after {
    content: 'MARS';
    position: absolute;
    right: -60px;
    top: 5px;
    font-size: 18px;
    color: #E0E0E0;
  }
  
  .toggle__handler {
    display: inline-block;
    position: relative;
    z-index: 1;
    top: 3px;
    left: 3px;
    width: 34px;
    height: 34px;
    background-color: #83D8FF;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: rotate(-45deg);
  }
  .toggle__handler .crater {
    position: absolute;
    background-color: #E8CDA5;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    border-radius: 100%;
  }
  .toggle__handler .crater--1 {
    top: 18px;
    left: 5px;
    width: 4px;
    height: 4px;
  }
  .toggle__handler .crater--2 {
    top: 20px;
    left: 16px;
    width: 6px;
    height: 6px;
  }
  .toggle__handler .crater--3 {
    top: 6px;
    left: 17px;
    width: 8px;
    height: 8px;
  }
  
  .star {
    position: absolute;
    background-color: #ffffff;
    transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    border-radius: 50%;
  }
  
  .star--1 {
    top: 10px;
    left: 35px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  
  .star--2 {
    top: 18px;
    left: 28px;
    z-index: 1;
    width: 30px;
    height: 3px;
  }
  
  .star--3 {
    top: 27px;
    left: 40px;
    z-index: 0;
    width: 30px;
    height: 3px;
  }
  
  .star--4,
  .star--5 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  
  .star--4 {
    top: 16px;
    left: 11px;
    z-index: 0;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
  }
  
  .star--5 {
    top: 32px;
    left: 17px;
    z-index: 0;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
  }
  
  input:checked + .toggle {
    background-color: rgba(0, 0, 0, 0.6);;
  }
  input:checked + .toggle:before {
    color: #E0E0E0;
  }
  input:checked + .toggle:after {
    color: #ffffff;
  }
  input:checked + .toggle .toggle__handler {
    background-color: #FFE5B5;
    transform: translate3d(40px, 0, 0) rotate(0);
  }
  input:checked + .toggle .toggle__handler .crater {
    opacity: 1;
  }
  input:checked + .toggle .star--1 {
    width: 2px;
    height: 2px;
  }
  input:checked + .toggle .star--2 {
    width: 4px;
    height: 4px;
    transform: translate3d(-5px, 0, 0);
  }
  input:checked + .toggle .star--3 {
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  }
  input:checked + .toggle .star--4,
  input:checked + .toggle .star--5 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  input:checked + .toggle .star--4 {
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
  input:checked + .toggle .star--5 {
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;
