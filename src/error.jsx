import React from 'react';
import {Link} from 'react-router-dom';

export default function CalculationError(props) {
  let {message} = props.location.state;
  return (
    <div class="card border rounded mt-4 p-4">
      <div class="card-body">
        <h5 class="card-title text-danger">Error</h5>
        <p class="card-text">{message}</p>
        <Link to="/" className="btn btn-primary">
          Go Back
        </Link>
      </div>
    </div>
  );
}
