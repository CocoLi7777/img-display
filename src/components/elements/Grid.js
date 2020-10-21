import React from 'react';
import { StyledGrid, StyledGridContent } from './../styles/StyledGrid';

export const Grid = ({ header, children }) => (
  <StyledGrid>
    <h1>{header}</h1>
    <StyledGridContent>{children}</StyledGridContent>
  </StyledGrid>
);
