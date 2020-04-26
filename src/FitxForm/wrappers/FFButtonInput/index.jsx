import React from 'react';
import PropTypes from 'prop-types';
import { ButtonInput } from 'ki-ui';

const FFButtonInput = (props) => {
  const {
    onClick, disabled, displayName,
  } = props;
  return (
    <ButtonInput
      className="FF-Input FF-ButtonInput"
      disabled={disabled}
      onClick={onClick}
      value={displayName}
      type="button"
    />
  );
};

FFButtonInput.defaultProps = {
  disabled: false,
  displayName: undefined,
  onClick: () => null,
};

FFButtonInput.propTypes = {
  disabled: PropTypes.bool,
  displayName: PropTypes.string,
  onClick: PropTypes.func,
};

export default FFButtonInput;
