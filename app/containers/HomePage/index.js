import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import './index.css';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selectors';
import reducer from './reducer';
import * as actions from './action';
import Calculator from './../../components/Calculator'

const key = 'home';

function HomePage({ number, onSetValue }) {
  useInjectReducer({ key, reducer });

  var addExpresion = e => {
    if (Number.isInteger(number)) {
      number = '';
    }
    onSetValue(number + e);
  };

  const getResult = () => {
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
          number = number.slice(0, i + 2) + number.slice(j + 1, number.length);
        } else {
          number = number.slice(0, i + 1) + number.slice(j + 1, number.length);
        }
      }
    }

    if (number.length === 0 || operator.indexOf(number[0]) !== -1)
      number = ''.concat('0', number);

    onSetValue(eval(number));
  };
  const clear = () => {
    onSetValue('');
  };
  const del = () => {
    onSetValue(number.toString(10).slice(0, -1));
  };
  return (
    <Calculator
      number = {number}
      addExpresion = {addExpresion}
      getResult = {getResult}
      del = {del}
      clear = {clear}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  number: makeSelectValue(),
});
export function mapDispatchToProps(dispatch) {
  return {
    onGetResult: a => dispatch(actions.getResult(a)),
    onSetValue: a => dispatch(actions.setValue(a)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
