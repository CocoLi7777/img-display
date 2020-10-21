import React from 'react';
import { StyledWork } from '../styles/StyledWork';

export const Work = (props) => {
  return (
    <div>
      <img src={props.item.urls[0].link} alt="img" />
      <p>
        Model:{' '}
        {props.item.exif.model === '' ? 'Unknown Model' : props.item.exif.model}
      </p>
      <p>
        Make:{' '}
        {props.item.exif.make === '' ? 'Unknown Make' : props.item.exif.make}
      </p>
    </div>
  );
};
