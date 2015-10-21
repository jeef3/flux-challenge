import React, { PropTypes } from 'react';

export const Jedi = ({jedi}) => {
  if (jedi) {
    return (
      <li className="css-slot">
        <h3>{jedi.name}</h3>
        <h6>Homeworld: {jedi.homeworld.name}</h6>
      </li>
    );
  } else {
    return <li className="css-slot" />;
  }
};
