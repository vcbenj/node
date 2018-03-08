const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function WeightControl() {
  return (
    <div className="form-group">
      <label for="weight">Item Weight</label>
      <input
        type="number"
        min="0.01"
        step="0.01"
        id="weight"
        className="form-control"
        placeholder="0.01"
        name="weight"
      />
    </div>
  );
};
