import React, { PropTypes } from 'react';

export const Jedi = ({jedi, danger}) => {
  return jedi.state === 'loaded'
    ? <li className="css-slot" style={{ color: danger ? 'red' : null }}>
        <h3>{jedi.name}</h3>
        <h6>Homeworld: {jedi.homeworld.name}</h6>
      </li>
    : <li className="css-slot" />;
 }
