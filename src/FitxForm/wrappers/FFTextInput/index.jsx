import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'ki-ui';

import { getError } from '../../utils';

const FFTextInput = (props) => {
  const {
    onChange, value, placeholder, disabled,
    maxLength, type, defaultValue, readOnly,
    max, min, spellCheck, error, errorText,
    helperText, regex,
  } = props;
  const showError = getError(value, regex) || error || (type === 'number' && (value > max || value < min));
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  return (
    <div className="FF-Input FF-TextInput">
      <TextInput
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        type={type}
        spellCheck={spellCheck}
        onBlur={(e) => onChange(e.target.value)}
        defaultValue={defaultValue || value}
        max={max}
        min={min}
      />
      <div
        className={`FF-Input-Footer ${showError ? 'Error' : 'Helper'}`}
      >
        {showError ? errorText : helperText}
      </div>
    </div>
  );
};

FFTextInput.defaultProps = {
  defaultValue: undefined,
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  max: null,
  maxLength: null,
  min: null,
  onChange: null,
  placeholder: '',
  readOnly: false,
  regex: '',
  spellCheck: false,
  value: undefined,
  type: 'text',
};

FFTextInput.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  regex: PropTypes.string,
  spellCheck: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default FFTextInput;
