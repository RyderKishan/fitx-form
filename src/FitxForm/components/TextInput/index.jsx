import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getError } from '../../utils';
import './TextInput.scss';

const TextInput = (props) => {
  const {
    onChange, value, placeholder, disabled,
    maxLength, type, defaultValue, readOnly,
    max, min, spellCheck, error, errorText,
    helperText, regex,
  } = props;
  const [val, setVal] = useState(value);
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  useEffect(() => {
    setVal(value);
  }, [value]);
  const showError = getError(val, regex) || error;
  return (
    <div className="JF-Input JF-TextInput">
      <input
        disabled={disabled}
        height={8}
        max={max}
        maxLength={maxLength}
        min={min}
        onBlur={() => onChange(val)}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        readOnly={readOnly}
        spellCheck={spellCheck}
        type={type}
        value={val || defaultValue}
      />
      <div
        className={`${showError ? 'Error' : 'Helper'}`}
      >
        {showError ? errorText : helperText}
      </div>
    </div>
  );
};

TextInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  max: null,
  maxLength: null,
  min: null,
  onChange: () => { },
  placeholder: '',
  readOnly: false,
  regex: null,
  spellCheck: false,
  value: '',
  type: 'text',
};

TextInput.propTypes = {
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

export default TextInput;
