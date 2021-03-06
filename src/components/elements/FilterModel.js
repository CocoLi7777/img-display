import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';

const { Option } = Select;

export const FilterModel = ({ callback }) => {
  function handleChange(value) {
    callback(value);
  }

  return (
    <div>
      <Select
        defaultValue="Model"
        style={{ width: 240 }}
        onChange={handleChange}
        data-test="modelFilter"
      >
        <Option value="all">All Model</Option>
        <Option value="NIKON D80">NIKON D80</Option>
        <Option value="CANON EOS 20D">CANON EOS 20D</Option>
        <Option value="FinePix S6500fd">FINEPIX S6500fd</Option>
        <Option value="D-LUX 3">D-LUX 3</Option>
        <Option value="SLP1000SE">SLP1000SE</Option>
        <Option value="DMC-FZ30">DMC-FZ30</Option>
        <Option value="CANON EOS 400D DIGITAL">CANON EOS 400D DIGITAL</Option>
      </Select>
    </div>
  );
};

FilterModel.propTypes = {
  callback: PropTypes.func,
};
