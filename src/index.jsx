import React from 'react';
import ReactDOM from 'react-dom';

import FitxForm from './FitxForm';
import * as Constants from './constants';

ReactDOM.render(
  <FitxForm {...Constants.props} />,
  document.getElementById('app'),
);
