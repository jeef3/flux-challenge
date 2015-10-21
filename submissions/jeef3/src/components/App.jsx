import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  render() {
    const { currentPlanet } = this.props;

    return (
      <div className="css-root">
        <h1 className="css-planet-monitor">
          Obi-Wan currently on {currentPlanet.name}
        </h1>

        <section className="css-scrollable-list">
          <ul className="css-slots">
            {this.props.jedis.map((jedi) => {
              return (
                <li className="css-slot" key={jedi.id}>
                  <h3>{jedi.name}</h3>
                  <h6>Homeworld: {jedi.homeworld.name}</h6>
                </li>
              );
            })}
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
