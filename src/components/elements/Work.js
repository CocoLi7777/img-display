import React from 'react';
import { StyledWork } from '../styles/StyledWork';

export const Work = (props) => {
  const makeName = props.item.exif.make.split(' ')[0];
  return (
    <StyledWork>
      <img src={props.item.urls[0].link} alt="img" />
      <p>
        Model:{' '}
        {props.item.exif.model === '' ? 'Unknown Model' : props.item.exif.model}
      </p>
      <p>Make: {props.item.exif.make === '' ? 'Unknown Make' : makeName}</p>
    </StyledWork>
  );
};
