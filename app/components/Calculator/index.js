import React, { useState, useEffect } from 'react';
import './index.css';


 function Caculator({number, addExpression, getResult, del, clear}) {
  return (
    <div id="calculator">
      <div className="calculator-logs" />
      <input
        type="string"
        className="calculator-input"
        value={number}
        onChange={addExpression}
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
            onClick={() => addExpression('%')}
          >
            %
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpression('/')}
          >
            /
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('7')}>
            7
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('8')}>
            8
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('9')}>
            9
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpression('*')}
          >
            *
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('4')}>
            4
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('5')}>
            5
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('6')}>
            6
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpression('-')}
          >
            -
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('1')}>
            1
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('2')}>
            2
          </button>
        </div>
        <div className="calculator-col">
          <button className="calculator-btn" onClick={() => addExpression('3')}>
            3
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn accent action"
            onClick={() => addExpression('+')}
          >
            +
          </button>
        </div>
      </div>
      <div className="calculator-row">
        <div className="calculator-col wide">
          <button className="calculator-btn" onClick={() => addExpression('0')}>
            0
          </button>
        </div>
        <div className="calculator-col">
          <button
            className="calculator-btn action"
            onClick={() => addExpression('.')}
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



export default Caculator;
