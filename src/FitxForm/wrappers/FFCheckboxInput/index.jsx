import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckboxInput } from 'ki-ui';

const FFCheckboxInput = (props) => {
  const {
    onChange, value, options, disabled, vertical,
    error, errorText, helperText, defaultValue, readOnly,
  } = props;
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  return (
    <div className="FF-Input FF-CheckboxInput">
      <CheckboxInput
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

FFCheckboxInput.defaultProps = {
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  onChange: null,
  options: [],
  value: undefined,
  readOnly: false,
  vertical: false,
};

FFCheckboxInput.propTypes = {
  defaultValue: PropTypes.shape({}),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  value: PropTypes.shape({}),
  readOnly: PropTypes.bool,
  vertical: PropTypes.bool,
};

export default FFCheckboxInput;
