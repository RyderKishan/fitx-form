import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';

import { getError } from '../../utils';
import './DateInput.scss';

const DateInput = (props) => {
  const {
    onChange, value, id, subType, allowClear, readOnly,
    error, errorText, helperText, regex, disabled, defaultValue,
  } = props;
  const showError = getError(value, regex) || error;
  const dt = value ? moment(value)
    .format(subType === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DDTHH:mm') : '';
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  return (
    <div className="JF-Input JF-DateInput">
      <input
        allowClear={allowClear}
        disabled={disabled}
        id={id}
        onChange={(e) => onChange(moment(e.target.value).toISOString())}
        readOnly={readOnly}
        title="Enter a date in this format YYYY-MM-DD"
        type={subType}
        value={dt}
      />
      <div
        className={`${showError ? 'Error' : 'Helper'}`}
      >
        {showError ? errorText : helperText}
      </div>
    </div>
  );
};

DateInput.defaultProps = {
  allowClear: true,
  defaultValue: '',
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  onChange: () => { },
  readOnly: false,
  regex: null,
  subType: 'date',
  value: null,
};

DateInput.propTypes = {
  allowClear: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  regex: PropTypes.string,
  subType: PropTypes.oneOf(['datetime-local', 'date']),
  value: PropTypes.string,
};

export default DateInput;
