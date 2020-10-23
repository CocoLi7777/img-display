import React from 'react';
import { StyledResetBtn } from './../styles/StyledResetBtn';

export const ResetBtn = ({ text }) => {
  const handleReset = () => {
    document.location.reload(true);
  };

  return (
    <StyledResetBtn type="button" onClick={handleReset}>
      {text}
    </StyledResetBtn>
  );
};
