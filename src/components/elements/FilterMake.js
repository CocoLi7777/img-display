import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const FilterMake = (props) => {
  const [checked, setChecked] = useState([]);

  function handleChange(value) {
    props.handleMakeFilters(value);
  }

  return (
    <div>
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
        <Option value="all">All</Option>
        <Option value="canon">Canon</Option>
        <Option value="fuji">Fuji</Option>
        <Option value="leica">Leica</Option>
        <Option value="nikon">Nikon</Option>
        <Option value="panasonic">Panasonic</Option>
      </Select>
    </div>
  );
};
