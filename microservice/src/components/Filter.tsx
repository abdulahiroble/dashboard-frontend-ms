import React from 'react';
import { Select, Space } from 'antd';

interface Option {
    defaultValue?: any;
    options?: object[];
}

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const Filter: React.FC<Option> = ({
    defaultValue,
    options,
}) => (
    <Space wrap>
        <Select
            defaultValue={defaultValue}
            style={{ width: 120, marginBottom: 30 }}
            onChange={handleChange}
            options={options}
        />
    </Space>
);

export default Filter;