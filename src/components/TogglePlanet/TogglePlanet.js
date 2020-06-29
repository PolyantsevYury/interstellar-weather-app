import {ToggleWrapper} from "./TogglePlanet.styles";
import React from "react";

export const TogglePlanet = ({planet, setPlanet}) => {
  return (
    <ToggleWrapper>
      <input type="checkbox"
             onChange={() => setPlanet(planet === 'Mars' ? 'Earth' : 'Mars')}
             id="dn" defaultChecked={(planet === 'Mars')}/>
      <label htmlFor="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </ToggleWrapper>
  )
}