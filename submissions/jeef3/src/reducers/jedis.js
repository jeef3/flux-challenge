import {
  RECEIVE_JEDI
} from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_JEDI:
    let jedi = action.payload;
    return Object.assign({}, state, { [jedi.id]: jedi });

  default:
    return state;
  }
};
