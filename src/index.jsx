/* eslint-disable no-console */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as R from 'ramda';

import FitxForm from './FitxForm';
import * as Constants from './constants';

const App = () => {
  const [values, setValues] = useState({});
  const onFormValuesChange = (groupId, elementId, value) => {
    const lensProp = R.lensPath([groupId, elementId]);
    const newValue = R.set(lensProp, value, { ...values });
    setValues(newValue);
  };
  console.log('values', JSON.stringify(values));
  return (
    <FitxForm
      formValues={values}
      metaData={Constants.metaData}
      onChange={onFormValuesChange}
      columns={2}
    />
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
