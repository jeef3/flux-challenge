import { connect } from 'react-redux';

import App from '../components/App.jsx';

function mapStateToProps({ currentPlanet }) {
  return { currentPlanet };
};

export default connect(mapStateToProps)(App);
