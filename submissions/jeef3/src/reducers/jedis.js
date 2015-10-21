import {
  RECEIVE_JEDI,
  INVALIDATE_JEDI
} from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_JEDI:
    let jedi = action.payload;
    return Object.assign({}, state, { [jedi.id]: jedi });

  case INVALIDATE_JEDI:
    let id = action.payload;
    let jedis = Object.assign({}, state);
    delete jedis[id];
    return jedis;

  default:
    return state;
  }
};
