import React from 'react';
import './styles/calculator.css';

function Calculator() {
  return (
    <div className="calculator">
      <div data-testid="display" className="display">0</div>
      <div className="button-row">
        <button
          type="button"
          className="button-clear"
          data-testid="button-AC"
        >
          AC
        </button>
        <button
          type="button"
          className="button-sign"
          data-testid="button-+/-"
        >
          +/-
        </button>
        <button
          type="button"
          className="button-percent"
          data-testid="button-%"
        >
          %
        </button>
        <button
          type="button"
          className="button-operator"
          data-testid="button-÷"
        >
          ÷
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          data-testid="button-7"
        >
          7
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-8"
        >
          8
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-9"
        >
          9
        </button>
        <button
          type="button"
          className="button-operator"
          data-testid="button-x"
        >
          x
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          data-testid="button-4"
        >
          4
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-5"
        >
          5
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-6"
        >
          6
        </button>
        <button
          type="button"
          className="button-operator"
          data-testid="button--"
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number"
          data-testid="button-1"
        >
          1
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-2"
        >
          2
        </button>
        <button
          type="button"
          className="button-number"
          data-testid="button-3"
        >
          3
        </button>
        <button
          type="button"
          className="button-operator"
          data-testid="button-+"
        >
          +
        </button>
      </div>
      <div className="button-row">
        <button
          type="button"
          className="button-number button-zero"
        >
          0
        </button>
        <button
          type="button"
          className="button-number"
        >
          .
        </button>
        <button
          type="button"
          className="button-operator"
          data-testid="button-="
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
