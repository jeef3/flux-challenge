import { connect } from 'react-redux';

import App from '../components/App.jsx';

function mapStateToProps({ currentPlanet, jedis }) {
  return { currentPlanet, jedis };
}

function mapDispatchToProps() {
  return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
