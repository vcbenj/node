import React from 'react';
import ReactDOM from 'react-dom';
import WeightControl from './weight_control.jsx';
import TypeControl from './type_control.jsx';
import Toggle from './toggle.jsx';

export default class PostalCalculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form
        className="border rounded p-4 mt-4"
        method="get"
        action="getRate"
        onSubmit={this.props.onSubmit}>
        <WeightControl
          weight={this.props.weight}
          onWeightChange={this.props.onWeightChange}
        />
        <TypeControl
          type={this.props.type}
          onTypeChange={this.props.onTypeChange}
        />
        <button type="submit" className="btn btn-primary mr-4 mb-4">
          Calculate
        </button>
        <Toggle
          onLabel="AJAX"
          offLabel="Old-school"
          handleToggleOn={this.props.onToggleOn}
          handleToggleOff={this.props.onToggleOff}
          toggled={this.props.useAjax}
        />
      </form>
    );
  }
}
