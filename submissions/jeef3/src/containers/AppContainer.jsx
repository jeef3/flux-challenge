import { connect } from 'react-redux';

import App from '../components/App.jsx';

function mapStateToProps({ currentPlanet, currentJedis, jedis }) {
  return {
    currentPlanet,
    jedis: currentJedis.map(jedi => jedi ? jedis[jedi.id] : null)
  };
}

export default connect(mapStateToProps)(App);
