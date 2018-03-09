const React = require('react');
const ReactDOM = require('react-dom');
const WeightControl = require('./weight_control.jsx');
const TypeControl = require('./type_control.jsx');

class PostalCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weight: 0.01, type: 'stamped'};
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleWeightChange(event) {
    console.log(event.target.value);
    this.setState({weight: event.target.value});
  }

  handleTypeChange(event) {
    console.log(event.target.value);
    this.setState({type: event.target.value});
  }
  render() {
    return (
      <form
        className="col-sm-4 border rounded p-4 mt-4"
        method="get"
        action="getRate">
        <WeightControl
          weight={this.state.weight}
          onWeightChange={this.handleWeightChange}
        />
        <TypeControl
          type={this.state.type}
          onTypeChange={this.handleTypeChange}
        />
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </form>
    );
  }
}

module.exports = PostalCalculator;
