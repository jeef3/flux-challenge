import React, { Component, PropTypes } from 'react';

import { PlanetMonitor } from './PlanetMonitor.jsx';
import { Jedi } from './Jedi.jsx';

export default class App extends Component {
  render() {
    const { currentPlanet, jedis } = this.props;

    return (
      <div className="css-root">
        <PlanetMonitor planet={currentPlanet} />

        <section className="css-scrollable-list">
          <ul className="css-slots">
            {jedis.map((jedi, i) =>
              <Jedi
                key={jedi ? jedi.id : i}
                jedi={jedi}
                highlight={jedi ? jedi.homeworld.id === currentPlanet.id : false} />)}
          </ul>

          <div className="css-scroll-buttons">
            <button className="css-button-up"></button>
            <button className="css-button-down"></button>
          </div>
        </section>
      </div>
    );
  }
}

App.propTypes = {
  currentPlanet: PropTypes.object.isRequired,
  jedis: PropTypes.array.isRequired
};
