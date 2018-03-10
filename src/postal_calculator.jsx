import React from 'react';
import ReactDOM from 'react-dom';
import WeightControl from './weight_control.jsx';
import TypeControl from './type_control.jsx';

export default function PostalCalculator(props) {
  return (
    <form className="border rounded p-4 mt-4" method="get" action="getRate">
      <WeightControl
        weight={props.weight}
        onWeightChange={props.onWeightChange}
      />
      <TypeControl type={props.type} onTypeChange={props.onTypeChange} />
      <button type="submit" className="btn btn-primary mr-4">
        Calculate
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.onSubmit}>
        Calculate with AJAX
      </button>
    </form>
  );
}
