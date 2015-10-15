import { PLANET_CHANGED } from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case PLANET_CHANGED:
    return action.payload;
  default:
    return state;
  }
};
