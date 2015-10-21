import xhr from 'xhr';

import {
  LOAD_JEDI_QUEUED,
  LOAD_JEDI_STARTED,
  LOAD_JEDI_FAILED,
  RECEIVE_JEDI
} from '../constants/ActionTypes';

export function loadJediAsync(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_JEDI_QUEUED,
      payload: id
    });

    // TODO: One request at a time?

    return new Promise((resolve, reject) => {
      var req = xhr({
        body: id,
        uri: `http://localhost:3000/dark-jedis/${id}`
      }, (err, res, body) => {
        if (err) {
          reject(dispatch(loadJediFailed(err)));
        } else {
          resolve(dispatch(receiveJedi(JSON.parse(body))));
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
    let toLoad = getState().currentJedis.filter(jedi => jedi ? jedi.state === 'needed' : false);
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

// export function cancelJediLoad(id) {
//   return (dispatch, store) => {
//     // TODO: Cancel request
//   };
// }
