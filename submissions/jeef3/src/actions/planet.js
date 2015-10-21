import { PLANET_CHANGED } from '../constants/ActionTypes';

export function changePlanet(planet) {
  return {
    type: PLANET_CHANGED,
    payload: planet
  };
}
