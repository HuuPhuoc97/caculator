/* eslint-disable no-unused-vars */
/* eslint-disable no-eval */
/* eslint-disable no-var */
/* eslint-disable react/button-has-type */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './index.css';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selectors';
import reducer from './reducer';
import * as actions from './action';
const key = 'home';

export function HomePage({ number, onGetResult, onSetValue }) {
  useInjectReducer({ key, reducer });

  var addExpresion = e => {
    if (Number.isInteger(number)) {
      number = '';
    }
    onSetValue(number + e);
  };
  const getResult = () => {
    let str = number;

    str = str.replace(/^0+/, '');

    for (let i = 0; i < str.length; i++) {
      if (
        (str[i] === '+' ||
          str[i] === '-' ||
          str[i] === '*' ||
          str[i] === '/') &&
        str[i + 1] === '0'
      ) {
        let j = i;
        while (j < str.length && str[j + 1] === '0') {
          j++;
        }
        const checkNumber = /^[1-9]/;
        const resultCheck = checkNumber.test(str[j + 1]);
        if (str[j] === '0' && !resultCheck) {
          str = str.slice(0, i + 2) + str.slice(j + 1, str.length);
        } else {
          str = str.slice(0, i + 1) + str.slice(j + 1, str.length);
        }
      }
    }

    if(str.length === 0 || str[0] === '+' ||
    str[0] === '-' ||
    str[0] === '*' ||
    str[0] === '/') str = ''.concat('0',str);
    console.log(str);
    
    onSetValue(eval(str));
  };
  const clear = () => {
    onSetValue('');
  };
  const del = () => {
    onSetValue(number.toString(10).slice(0, -1));
  };
  return (
    <div id="calculator">
      <div className="calculator-logs" />
      <input
        type="string"
        className="calculator-input"
        value={number}
        onChange={addExpresion}
      />
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn gray action" onClick={clear}>
            C
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn gray action" onClick={del}>
            del
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn gray action"
            onClick={() => addExpresion('%')}
          >
            %
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpresion('/')}
          >
            /
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('7')}>
            7
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('8')}>
            8
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('9')}>
            9
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpresion('*')}
          >
            *
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('4')}>
            4
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('5')}>
            5
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('6')}>
            6
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpresion('-')}
          >
            -
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('1')}>
            1
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('2')}>
            2
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpresion('3')}>
            3
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpresion('+')}
          >
            +
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col wide">
          <button className="calculator-btn" onClick={() => addExpresion('0')}>
            0
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn action"
            onClick={() => addExpresion('.')}
          >
            .
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn accent action" onClick={getResult}>
            =
          </button>
        </div>
      </div>
    </div>
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
