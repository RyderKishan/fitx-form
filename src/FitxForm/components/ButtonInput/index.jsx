import React from 'react';
import PropTypes from 'prop-types';

import './ButtonInput.scss';

const ButtonInput = (props) => {
  const {
    onClick, value, disabled, displayName,
  } = props;
  return (
    <input
      className="JF-Input JF-ButtonInput"
      defaultValue={value}
      disabled={disabled}
      onClick={onClick}
      type="button"
      value={displayName}
    />
  );
};

ButtonInput.defaultProps = {
  disabled: false,
  displayName: '',
  onClick: () => { },
  value: '',
};

ButtonInput.propTypes = {
  disabled: PropTypes.bool,
  displayName: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default ButtonInput;
