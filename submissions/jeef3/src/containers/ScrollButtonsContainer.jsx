import { connect } from 'react-redux';

import { ScrollButtons } from '../components/ScrollButtons.jsx';
import { moveUp, moveDown } from '../actions/jedi';

function firstKnown(jedis) {
  return jedis
    .filter(j => j.state === 'loaded')[0] || { master: {} };
}

function lastKnown(jedis) {
  return jedis
    .filter(j => j.state === 'loaded')
    .reverse()[0] || { apprentice: {} };
}

function hasMatchForPlanet(jedis, planet) {
  return jedis
    .filter(j => j.state === 'loaded')
    .filter(j => j.homeworld.id === planet.id)
    .length > 0;
}

function mapStateToProps({ jedis, currentPlanet }) {
  const danger = hasMatchForPlanet(jedis, currentPlanet)

  return {
    upEnabled: !danger && !!firstKnown(jedis).master.id,
    downEnabled: !danger && !!lastKnown(jedis).apprentice.id
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMoveUp: () => dispatch(moveUp()),
    onMoveDown: () => dispatch(moveDown())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollButtons);
