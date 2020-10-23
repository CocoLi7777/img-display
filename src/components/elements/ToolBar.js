import React from 'react';
import { StyledToolBar, StyledToolBarContent } from '../styles/StyledToolBar';

export const ToolBar = ({ children }) => (
  <StyledToolBar>
    <StyledToolBarContent>{children}</StyledToolBarContent>
  </StyledToolBar>
);
