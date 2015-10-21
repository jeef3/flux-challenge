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
    return state;

  case RECEIVE_JEDI:
    let receivedJedi = action.payload;
    let jedis = Object.assign([], state);
    let match = jedis
      .filter(jedi => jedi ? jedi.state === 'needed' : false)
      .filter(jedi => jedi.id === receivedJedi.id)[0];

    match.state = 'loaded';

    let index = jedis.indexOf(match);
    if (index > -1 && index < 4 && receivedJedi.apprentice.id) {
      jedis[index + 1] = { id: receivedJedi.apprentice.id, state: 'needed' };
    }

    return jedis;

  default:
    return state;
  }
};
