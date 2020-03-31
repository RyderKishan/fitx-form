import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './CheckboxInput.scss';

const CheckboxInput = (props) => {
  const {
    onChange, value, options, disabled, vertical, id,
    error, errorText, helperText, defaultValue,
  } = props;

  const onValueChange = (event) => {
    const { checked, value: val } = event.target;
    let newVal = (value === '' || value === null || value === undefined)
      ? [] : value;
    if (checked) {
      newVal.push(val);
      newVal = [...new Set(newVal)];
    } else {
      newVal = newVal.filter((e) => e !== val);
    }
    onChange(newVal);
  };
  useEffect(() => {
    if (defaultValue && defaultValue.length > 0) onChange(defaultValue);
  }, []);
  return (
    <div className="JF-Option">
      <div className={`JF-Input JF-CheckboxInput ${vertical ? 'column' : ''}`}>
        {
          options.map((option) => (
            <label
              className="JF-CheckboxInput-label"
              htmlFor={option.value}
            >
              <input
                checked={value.includes(option.value)}
                disabled={disabled}
                id={option.value}
                name={id}
                onChange={onValueChange}
                type="checkbox"
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

CheckboxInput.defaultProps = {
  defaultValue: [],
  disabled: false,
  error: false,
  errorText: '',
  helperText: '',
  onChange: () => { },
  options: [],
  value: [],
  vertical: true,
};

CheckboxInput.propTypes = {
  defaultValue: PropTypes.arrayOf(PropTypes.string),
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
  value: PropTypes.arrayOf(PropTypes.string),
  vertical: PropTypes.bool,
};

export default CheckboxInput;
