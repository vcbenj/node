const React = require('react');
const ReactDOM = require('react-dom');
const WeightControl = require('./weight_control.jsx');
const TypeControl = require('./type_control.jsx');

module.exports = function PostalCalculator() {
  return (
    <form
      className="col-sm-4 border rounded p-4 mt-4"
      method="get"
      action="getRate">
      <WeightControl />
      <TypeControl />
      <button type="submit" className="btn btn-primary">
        Calculate
      </button>
    </form>
  );
};
