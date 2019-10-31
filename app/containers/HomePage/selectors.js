import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectValue = () =>
  createSelector(
    selectHome,
    homeState => homeState.value,
  );

export { selectHome, makeSelectValue };
