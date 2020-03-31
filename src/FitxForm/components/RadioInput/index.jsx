import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './RadioInput.scss';

const RadioInput = (props) => {
  const {
    onChange, value, id, options, disabled, vertical,
    error, errorText, helperText, defaultValue,
  } = props;
  useEffect(() => {
    if (defaultValue) onChange(defaultValue);
  }, []);
  return (
    <div className="JF-Option">
      <div className={`JF-RadioInput ${vertical ? 'column' : ''}`.trim()}>
        {
          options.map((option) => (
            <label
              className="JF-RadioInput-label"
              htmlFor={`${id}-${option.value}`}
            >
              <input
                checked={value === option.value}
                className="JF-RadioInput-input"
                disabled={disabled}
                id={`${id}-${option.value}`}
                name={id}
                onChange={(e) => onChange(e.target.value)}
                type="radio"
                value={option.value}
              />
              {option.label}
            </label>
          ))
        }
      </div>
      <div
        className={`${error ? 'Error' : 'Helper'}`}
      >
        {error ? errorText : helperText}
      </div>
    </div>

  );
};

RadioInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  onChange: () => { },
  options: [],
  value: '',
  vertical: false,
};

RadioInput.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string.isRequired,
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

export default RadioInput;
