import React, { Component, PropTypes } from 'react';

import { PlanetMonitor } from './PlanetMonitor.jsx';
import { Jedi } from './Jedi.jsx';

export default class App extends Component {
  render() {
    const {
      currentPlanet,
      jedis ,
      onMoveUp,
      onMoveDown
    } = this.props;

    return (
      <div className="css-root">
        <PlanetMonitor planet={currentPlanet} />

        <section className="css-scrollable-list">
          <ul className="css-slots">
            {jedis.map((jedi, i) =>
              <Jedi
                key={jedi.id || i}
                jedi={jedi}
                highlight={jedi.state === 'loaded'
                  ? jedi.homeworld.id === currentPlanet.id
                  : false} />)}
          </ul>

          <div className="css-scroll-buttons">
            <button
                className="css-button-up"
                onClick={onMoveUp}></button>
            <button
                className="css-button-down"
                onClick={onMoveDown}></button>
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  currentPlanet: PropTypes.object.isRequired,
  jedis: PropTypes.array.isRequired,

  onMoveUp: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func.isRequired
};
