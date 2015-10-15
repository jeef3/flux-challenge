import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    const { currentPlanet } = this.props;

    return (
      <div className="css-root">
        <h1 className="css-planet-monitor">
          Obi-Wan currently on {currentPlanet}
        </h1>

        <section className="css-scrollable-list">
          <ul className="css-slots">
            <li className="css-slot">
              <h3>Jorak Uln</h3>
              <h6>Homeworld: Korriban</h6>
            </li>
            <li className="css-slot">
              <h3></h3>
              <h6></h6>
            </li>
            <li className="css-slot">
              <h3></h3>
              <h6></h6>
            </li>
            <li className="css-slot">
              <h3></h3>
              <h6></h6>
            </li>
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
  currentPlanet: PropTypes.string
};
