import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { makeSelectValue } from './selectors';
import reducer from './reducer';
import * as actions from './action';
import Calculator from './../../components/Calculator'

const key = 'home';

function HomePage({ number, onSetValue, onGetResult, onClear, onDel, onAddExpression }) {
  useInjectReducer({ key, reducer });

  var addExpression = e => {
    if (Number.isInteger(number)) {
      // onSetValue('');
      onClear();
    }
    onAddExpression(e);
  };

  const getResult = () => {
    onGetResult();
  };
  const clear = () => {
    onClear();
  };
  const del = () => {
    onDel();
  };
  return (
    <Calculator
      number = {number}
      addExpression = {addExpression}
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
    onGetResult: () => dispatch(actions.getResult()),
    onClear: () => dispatch(actions.clear()),
    onDel: () => dispatch(actions.del()),
    onSetValue: value => dispatch(actions.setValue(value)),
    onAddExpression: value => dispatch(actions.addExpression(value)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
