import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Result from './result.jsx';
import PostalCalculator from './postal_calculator.jsx';
import CalculationError from './error.jsx';

ReactDOM.render(
  <Router>
    <div className="col-sm-4">
      <Route exact path="/" component={withRouter(PostalCalculator)} />
      <Route path="/result" component={withRouter(Result)} />
      <Route path="/error" component={withRouter(CalculationError)} />
    </div>
  </Router>,
  document.getElementById('app'),
);
