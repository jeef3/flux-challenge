import { connect } from 'react-redux';

import App from '../components/App.jsx';
import { moveUp, moveDown } from '../actions/jedi';

function mapStateToProps({ currentPlanet, jedis }) {
  return { currentPlanet, jedis };
}

function mapDispatchToProps(dispatch) {
  return {
    onMoveUp: () => dispatch(moveUp()),
    onMoveDown: () => dispatch(moveDown())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
