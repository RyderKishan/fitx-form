import React from 'react';
import ReactDOM from 'react-dom';

import JsonForm from './JsonForm';
import * as Constants from './constants';

ReactDOM.render(
  <JsonForm {...Constants.props} />,
  document.getElementById('app'),
);
