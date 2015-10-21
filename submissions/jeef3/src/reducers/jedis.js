import {
  RECEIVE_JEDI
} from '../constants/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
  case RECEIVE_JEDI:
    return [action.payload];
  default:
    return state;
  }
};
