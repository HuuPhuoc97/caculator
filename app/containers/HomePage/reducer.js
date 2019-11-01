import produce from 'immer';
import * as types from './constants';

// The initial state of the App
export const initialState = {
  value: '0',
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_VALUE:
        state.value = action.value;
        return { ...state };

      // get result
      case types.GET_RESULT:
        let number = state.value;
        number = number.replace(/^0+/, '');
        let operator = ['+', '-', '*', '/'];

        //Remove redundant 0 in math expressions
        for (let i = 0; i < number.length; i++) {
          if (operator.indexOf(number[i]) !== -1) {
            let j = i;
            while (j < number.length && number[j + 1] === '0') {
              j++;
            }
            const checkNumber = /^[1-9]/;
            const resultCheck = checkNumber.test(number[j + 1]);
            if (number[j] === '0' && !resultCheck) {
              number =
                number.slice(0, i + 2) + number.slice(j + 1, number.length);
            } else {
              number =
                number.slice(0, i + 1) + number.slice(j + 1, number.length);
            }
          }
        }

        if (number.length === 0 || operator.indexOf(number[0]) !== -1)
          number = ''.concat('0', number);

        number = eval(number);
        return { ...state, value: number };

      case types.CLEAR:
        state.value = '0';
        return { ...state };

      case types.DEL:
        state.value = state.value.toString(10).slice(0, -1);
        return { ...state };

      case types.ADD_EXPRESSION:
        if(state.value === '0' )
            state.value = '';
        state.value += action.value;
        return { ...state };

      default:
        return state;
    }
  });

export default homeReducer;
