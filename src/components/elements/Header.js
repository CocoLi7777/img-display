import React from 'react';
import { StyledHeader } from './../styles/StyledHeader';
import Artist from './../images/artist.svg';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <img src={Artist} alt="artist" />
      &nbsp;&nbsp;WorkBay
    </div>
  </StyledHeader>
);

export default Header;
