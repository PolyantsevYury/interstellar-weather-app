import React from 'react';
import { UnitStyles, Toggle } from './Unit.styles';

export const Unit = ({ isMetric, setMetric }) => (
  <UnitStyles>
    <label htmlFor='cel'>°C</label>
    <Toggle metric={isMetric} onClick={() => setMetric((prev) => !prev)} />
    <label htmlFor='fah'>°F</label>
  </UnitStyles>
);
