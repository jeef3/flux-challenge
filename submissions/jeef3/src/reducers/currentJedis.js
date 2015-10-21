import { 
  MOVE_UP,
  MOVE_DOWN,
  LOAD_JEDI_QUEUED,
  RECEIVE_JEDI
} from '../constants/ActionTypes';

const initialState = [{ id: 3616, state: 'needed' }, null, null, null, null];

export default (state = initialState, action) => {
  switch (action.type) {
  case MOVE_UP:
  case MOVE_DOWN:

  case LOAD_JEDI_QUEUED:
    // TODO: Mark the Jedi as loading

  case RECEIVE_JEDI:
    let match = state
      .filter(jedi => jedi ? jedi.state === 'needed' : false)
      .filter(jedi => jedi.id === action.payload.id);

  default:
    return state;
  }
};
