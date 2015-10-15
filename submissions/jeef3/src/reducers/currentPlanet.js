import { CHANGE_PLANET } from '../constants/ActionTypes';

export default (state = {}, action) => {
  switch (action.type) {
  case CHANGE_PLANET:
    return action.payload;
  default:
    return state;
  }
};
