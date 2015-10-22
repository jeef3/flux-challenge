import xhr from 'xhr';

import {
  LOAD_JEDI_QUEUED,
  LOAD_JEDI_STARTED,
  LOAD_JEDI_FAILED,
  RECEIVE_JEDI,
  MOVE_UP,
  MOVE_DOWN
} from '../constants/ActionTypes';

export function loadJediAsync(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_JEDI_QUEUED,
      payload: id
    });

    return new Promise((resolve, reject) => {
      var req = xhr({
        body: id,
        uri: `http://localhost:3000/dark-jedis/${id}`
      }, (err, res, body) => {
        if (err || res.statusCode !== 200) {
          reject(dispatch(loadJediFailed(err)));
        } else {
          resolve(dispatch(receiveJedi(JSON.parse(body))));
          dispatch(loadNextJediAsync());
        }
      });

      dispatch({
        type: LOAD_JEDI_STARTED,
        payload: { id, req }
      });
    });
  };
}

export function loadNextJediAsync() {
  return (dispatch, getState) => {
    let toLoad = getState().jedis
      .filter(jedi => jedi.state === 'needed');

    if (toLoad.length) {
      dispatch(loadJediAsync(toLoad[0].id));
    }
  };
}

export function receiveJedi(jedi) {
  return {
    type: RECEIVE_JEDI,
    payload: jedi
  };
}

export function loadJediFailed(err) {
  return {
    type: LOAD_JEDI_FAILED,
    payload: err
  };
}

export function moveUp() {
  return dispatch => {
    dispatch({ type: MOVE_UP });
    dispatch(loadNextJediAsync());
  };
}

export function moveDown() {
  return dispatch => {
    dispatch({ type: MOVE_DOWN });
    dispatch(loadNextJediAsync());
  };
}

// export function cancelJediLoad(id) {
//   return (dispatch, store) => {
//     // TODO: Cancel request
//   };
// }
