import React, { PropTypes } from 'react';

export const Jedi = ({jedi}) => (
  <li className="css-slot" key={jedi.id}>
    <h3>{jedi.name}</h3>
    <h6>Homeworld: {jedi.homeworld.name}</h6>
  </li>
);
