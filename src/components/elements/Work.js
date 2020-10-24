import React from 'react';
import { StyledWork } from '../styles/StyledWork';
import PropTypes from 'prop-types';

export const Work = ({ item }) => {
  if (item) {
    const makeName = item.exif.make.split(' ')[0];

    return (
      <StyledWork data-test="workComponent">
        <img src={item.urls[0].link} alt="img" data-test="workImage" />
        <p>
          Model: {item.exif.model === '' ? 'Unknown Model' : item.exif.model}
        </p>
        <p>Make: {item.exif.make === '' ? 'Unknown Make' : makeName}</p>
      </StyledWork>
    );
  }
};

Work.propTypes = {
  item: PropTypes.object,
};
