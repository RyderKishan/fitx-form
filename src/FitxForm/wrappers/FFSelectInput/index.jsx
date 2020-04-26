import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectInput } from 'ki-ui';

const FFSelectInput = (props) => {
  const {
    onSelect, value, options, size, disabled, emptyOption,
    placeholder, error, errorText, helperText, defaultValue,
  } = props;
  useEffect(() => {
    if (defaultValue) onSelect(defaultValue);
  }, []);
  return (
    <div className="FF-Input FF-SelectInput">
      <SelectInput
        disabled={disabled}
        emptyOption={emptyOption}
        onChange={(e) => onSelect(e.target.value)}
        placeholder={placeholder}
        size={size}
        options={options}
        value={value}
      />
      <div
        className={`FF-Input-Footer ${error ? 'Error' : 'Helper'}`}
      >
        {error ? errorText : helperText}
      </div>
    </div>
  );
};

FFSelectInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  emptyOption: true,
  error: false,
  errorText: '',
  helperText: '',
  onSelect: () => null,
  options: [],
  placeholder: undefined,
  size: undefined,
  value: '',
};

FFSelectInput.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  emptyOption: PropTypes.bool,
  error: PropTypes.bool,
  errorText: PropTypes.string,
  helperText: PropTypes.string,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  placeholder: PropTypes.string,
  size: PropTypes.number,
  value: PropTypes.string,
};

export default FFSelectInput;
