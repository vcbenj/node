const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function TypeControl(props) {
  return (
    <div className="form-group">
      <label for="type">Item Type</label>
      <select
        id="type"
        className="form-control"
        name="type"
        value={props.type}
        onChange={props.onTypeChange}>
        <option value="stamped">Letters (Stamped)</option>
        <option value="metered">Letters (Metered)</option>
        <option value="flats">Large Envelopes (Flats)</option>
        <option value="parcels">Parcels</option>
      </select>
    </div>
  );
};
