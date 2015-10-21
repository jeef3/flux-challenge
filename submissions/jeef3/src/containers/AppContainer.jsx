import { connect } from 'react-redux';

import App from '../components/App.jsx';

function mapStateToProps({ currentPlanet, currentJedis, jedis }) {
  return {
    currentPlanet,
    jedis: currentJedis.map(id => jedis[id])
  };
}

export default connect(mapStateToProps)(App);
