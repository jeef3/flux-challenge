import {
  MOVE_UP,
  MOVE_DOWN,
  LOAD_JEDI_QUEUED,
  RECEIVE_JEDI
} from '../constants/ActionTypes';

const initialState = [
  { id: 3616, state: 'needed' }, {}, {}, {}, {}];

export default (state = initialState, action) => {
  let jedis;

  switch (action.type) {
  case MOVE_UP:
    jedis = Object.assign([], state);
    jedis.unshift({}, { id: jedis[0].master.id, state: 'needed' });
    return jedis.slice(0, 5);

  case MOVE_DOWN:
    jedis = Object.assign([], state);
    jedis.push({ id: jedis[4].apprentice.id, state: 'needed' }, {});
    return jedis.slice(2, 5);

  case LOAD_JEDI_QUEUED:
    // TODO: Mark the Jedi as loading
    return state;

  case RECEIVE_JEDI:
    jedis = Object.assign([], state);

    let receivedJedi = action.payload;
    let match = jedis.filter(jedi => jedi.id === receivedJedi.id)[0];

    match.state = 'loaded';

    let index = jedis.indexOf(match);
    jedis[index] = Object.assign(match, receivedJedi);

    if (index > 0 && 
        receivedJedi.master.id &&
        jedis[index - 1].state !== 'loaded') {
      jedis[index = 1].id = receivedJedi.master.id;
      jedis[index - 1].state = 'needed';
    }

    if (index < 4 &&
        receivedJedi.apprentice.id &&
        jedis[index + 1].state !== 'loaded') {
      jedis[index + 1].id = receivedJedi.apprentice.id;
      jedis[index + 1].state = 'needed';
    }

    return jedis;

  default:
    return state;
  }
};
