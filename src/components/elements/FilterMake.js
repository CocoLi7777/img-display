import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const { Option } = Select;

export const FilterMake = ({ callback }) => {
  function handleChange(value) {
    callback(value);
  }

  return (
    <div>
      <Select
        defaultValue="Make"
        style={{ width: 240 }}
        onChange={handleChange}
        data-test="makeFilter"
      >
        <Option value="all">All Make</Option>
        <Option value="canon">Canon</Option>
        <Option value="fuji">Fuji</Option>
        <Option value="leica">Leica</Option>
        <Option value="nikon">Nikon</Option>
        <Option value="panasonic">Panasonic</Option>
      </Select>
    </div>
  );
};

FilterMake.propTypes = {
  callback: PropTypes.func,
};
