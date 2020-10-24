import React from 'react';
import { StyledResetBtn } from './../styles/StyledResetBtn';
import PropTypes from 'prop-types';

export const ResetBtn = ({ text, callback }) => {
  return (
    <StyledResetBtn type="button" onClick={callback} data-test="button">
      {text}
    </StyledResetBtn>
  );
};
ResetBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
