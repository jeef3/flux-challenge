import { MOVE_UP, MOVE_DOWN } from '../constants/ActionTypes';

const initialState = [3616, null, null, null, null];

export default (state = initialState, action) => {
  switch (action.type) {
  case MOVE_UP:
  case MOVE_DOWN:
  default:
    return state;
  }
};
