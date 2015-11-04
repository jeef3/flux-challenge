import {
  MOVE_UP,
  MOVE_DOWN,
  RECEIVE_JEDI,
  LOAD_JEDI_STARTED
} from '../constants/ActionTypes';

const initialState = [{}, {}, { id: 3616, state: 'needed' }, {}, {}];

function refreshJediState(jedis) {
  jedis.forEach((jedi, index) => {
    if (!jedi.id || jedi.state === 'needed') { return; }

    const prev = jedis[index - 1];
    const next = jedis[index + 1];

    if (jedi.master.id &&
        prev &&
        prev.state !== 'loaded') {
      prev.id = jedi.master.id;
      prev.state = 'needed';
    }

    if (jedi.apprentice.id &&
        next &&
        next.state !== 'loaded') {
      next.id = jedi.apprentice.id;
      next.state = 'needed';
    }
  });

  return jedis;
}

const handlers = {
  [MOVE_UP]: (state) => {
    let newState = state.slice();
    newState.unshift({}, {});

    return refreshJediState(newState.slice(0, 5));
  },

  [MOVE_DOWN]: (state) => {
    let newState = state.slice();
    newState.push({}, {});

    return refreshJediState(newState.slice(2));
  },

  [LOAD_JEDI_STARTED]: (state, {id, req}) => {
    const index = state.findIndex(j => j.id === id);
    if (index === -1) { return state; }

    let updatedJedi = Object.assign({}, state[index], { req });

    let newState = state.slice();
    newState.splice(index, 1, updatedJedi);

    return refreshJediState(newState);
  },

  [RECEIVE_JEDI]: (state, jedi) => {
    let updatedJedi = Object.assign({}, jedi, { state: 'loaded' });
    let index = state.findIndex(j => j.id === jedi.id);

    if (index === -1) { return state; }

    let newState = state.slice();
    newState.splice(index, 1, updatedJedi);

    return refreshJediState(newState);
  }
};

export default (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ?
    handler(state, action.payload) :
    state;
};
