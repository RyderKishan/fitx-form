import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { RadioInput } from 'ki-ui';

const FFRadioInput = (props) => {
  const {
    onChange, value, readOnly, options, disabled, vertical,
    error, errorText, helperText, defaultValue,
  } = props;
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  return (
    <div className="FF-Input FF-RadioInput">
      <RadioInput
        onChange={onChange}
        value={value}
        options={options}
        vertical={vertical}
        disabled={disabled}
        readOnly={readOnly}
      />
      <div
        className={`FF-Input-Footer ${error ? 'Error' : 'Helper'}`}
      >
        {error ? errorText : helperText}
      </div>
    </div>

  );
};

FFRadioInput.defaultProps = {
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  readOnly: false,
  onChange: null,
  options: [],
  value: undefined,
  vertical: false,
};

FFRadioInput.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.string,
  vertical: PropTypes.bool,
};

export default FFRadioInput;
