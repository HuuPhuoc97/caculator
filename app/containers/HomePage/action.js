import * as types from './constants';
export function getResult(value) {
  return {
    type: types.GET_RESULT,
    value,
  };
}
export function setValue(value) {
  return {
    type: types.SET_VALUE,
    value,
  };
}

