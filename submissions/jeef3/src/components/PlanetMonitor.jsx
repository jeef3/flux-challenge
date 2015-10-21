import React, { PropTypes } from 'react';

export const PlanetMonitor = ({planet}) => (
  <h1 className="css-planet-monitor">
    Obi-Wan currently on {planet.name}
  </h1>
);
