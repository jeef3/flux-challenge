import { CHANGE_PLANET } from '../constants/ActionTypes';

export function changePlanet(planet) {
  return {
    type: CHANGE_PLANET,
    payload: planet
  };
}
