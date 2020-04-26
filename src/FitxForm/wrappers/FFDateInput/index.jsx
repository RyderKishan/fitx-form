import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-timezone';
import { DateInput } from 'ki-ui';


import { getError, isNull } from '../../utils';

const FFDateInput = (props) => {
  const {
    onChange, value, subType, allowClear, readOnly,
    error, errorText, helperText, regex, disabled, defaultValue,
  } = props;
  const showError = getError(value, regex) || error;
  const customValue = defaultValue || value;
  const dt = (customValue === '' || isNull(customValue)) ? undefined : moment(customValue)
    .format(subType === 'date' ? 'YYYY-MM-DD' : 'YYYY-MM-DDTHH:mm');
  const onChangeHandler = (val) => {
    if (val === '') {
      onChange('');
    } else if (subType === 'date') {
      onChange(moment(val).format('YYYY-MM-DD'));
    } else {
      onChange(moment(val).toISOString());
    }
  };
  useEffect(() => {
    if (defaultValue) onChangeHandler(defaultValue);
  }, []);
  return (
    <div className="FF-Input FF-DateInput">
      <DateInput
        allowClear={allowClear}
        disabled={disabled}
        onChange={(e) => onChangeHandler(e.target.value)}
        readOnly={readOnly}
        type={subType}
        value={dt}
      />
      <div
        className={`FF-Input-Footer ${showError ? 'Error' : 'Helper'}`}
      >
        {showError ? errorText : helperText}
      </div>
    </div>
  );
};

FFDateInput.defaultProps = {
  allowClear: true,
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  onChange: null,
  readOnly: false,
  regex: null,
  subType: 'date',
  value: undefined,
};

FFDateInput.propTypes = {
  allowClear: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  readOnly: PropTypes.bool,
  regex: PropTypes.string,
  subType: PropTypes.oneOf(['datetime-local', 'date']),
  value: PropTypes.string,
};

export default FFDateInput;
