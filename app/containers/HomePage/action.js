import * as types from './constants';
export function getResult() {
  return {
    type: types.GET_RESULT,
  };
}
export function setValue(value) {
  return {
    type: types.SET_VALUE,
    value,
  };
}
export function del() {
  return {
    type: types.DEL,
  };
}
export function clear() {
  return {
    type: types.CLEAR,
  };
}
export function addExpression(value) {
  return {
    type: types.ADD_EXPRESSION,
    value
  };
}
