import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './SelectInput.scss';

const SelectInput = (props) => {
  const {
    onSelect, value, options, size, disabled, emptyOption,
    placeholder, id, error, errorText, helperText, defaultValue,
  } = props;
  useEffect(() => {
    if (defaultValue) onSelect(defaultValue);
  }, []);
  return (
    <div className="JF-Input JF-SelectInput">
      <select
        disabled={disabled}
        id={id}
        onChange={(e) => onSelect(e.target.value)}
        placeholder={placeholder}
        size={size}
        value={value}
      >
        {
          emptyOption && (
            <option value="">Select One...</option>
          )
        }
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={`${error ? 'Error' : 'Helper'}`}
      >
        {error ? errorText : helperText}
      </div>
    </div>
  );
};

SelectInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  emptyOption: true,
  error: false,
  errorText: '',
  helperText: '',
  id: '',
  onSelect: () => { },
  options: [],
  placeholder: '',
  size: 'default',
  value: '',
};

SelectInput.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  emptyOption: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  id: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small', 'default']),
  value: PropTypes.string,
};

export default SelectInput;
