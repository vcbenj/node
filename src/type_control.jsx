const React = require('react');
const ReactDOM = require('react-dom');

module.exports = function TypeControl() {
  return (
    <div className="form-group">
      <label for="type">Item Type</label>
      <select id="type" className="form-control" name="type">
        <option value="stamped">Letters (Stamped)</option>
        <option value="metered">Letters (Metered)</option>
        <option value="flats">Large Envelopes (Flats)</option>
        <option value="parcels">Parcels</option>
      </select>
    </div>
  );
};
