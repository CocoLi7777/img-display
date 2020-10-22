import React, { useState } from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

export const FilterModel = (props) => {
  const [checked, setChecked] = useState([]);

  function handleChange(value) {
    props.handleModelFilters(value);
  }

  return (
    <div>
      <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
        <Option value="NIKON D80">NiKON D80</Option>
        <Option value="Canon EOS 20D">CANON EOS 20D</Option>
        <Option value="FinePix S6500fd">FINEPIX S6500fd</Option>
        <Option value="D-LUX 3">D-LUX 3</Option>
        <Option value="SLP1000SE">SLP1000SE</Option>
        <Option value="DMC-FZ30">DMC-FZ30</Option>
        <Option value="Canon EOS 400D DIGITAL">CANON EOS 400D DIGITAL</Option>
      </Select>
    </div>
  );
};