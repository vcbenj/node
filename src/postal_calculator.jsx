import React from 'react';
import ReactDOM from 'react-dom';
import WeightControl from './weight_control.jsx';
import TypeControl from './type_control.jsx';

export default class PostalCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {weight: 0.01, type: 'stamped'};
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWeightChange(event) {
    console.log(event.target.value);
    this.setState({weight: event.target.value});
  }

  handleTypeChange(event) {
    console.log(event.target.value);
    this.setState({type: event.target.value});
  }

  handleSubmit(event) {
    console.log('submitting...');
    let url = `/api/rates/${this.state.type}?weight=${this.state.weight}`;
    fetch(url, {method: 'GET'})
      .then(res => {
        if (res.ok && res.status == 200) return res.json();

        throw res;
      })
      .then(data => {
        let {type, weight, rate} = data;
        console.log(`Response: ${type}, ${weight}, ${rate}`);
        let {history} = this.props;
        history.push('/result', data);
      })
      .catch(err => {
        err.text().then(msg => {
          console.log(msg);
          let {history} = this.props;
          history.push('/error', {message: msg});
        });
      });
  }

  render() {
    return (
      <form className="border rounded p-4 mt-4" method="get" action="getRate">
        <WeightControl
          weight={this.state.weight}
          onWeightChange={this.handleWeightChange}
        />
        <TypeControl
          type={this.state.type}
          onTypeChange={this.handleTypeChange}
        />
        <button type="submit" className="btn btn-primary mr-4">
          Calculate
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}>
          Calculate with AJAX
        </button>
      </form>
    );
  }
}
