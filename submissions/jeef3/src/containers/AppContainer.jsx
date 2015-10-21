import { connect } from 'react-redux';

import App from '../components/App.jsx';

function mapStateToProps({ currentPlanet, jedis }) {
  return { currentPlanet, jedis };
}

export default connect(mapStateToProps)(App);
