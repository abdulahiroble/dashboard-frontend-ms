import React from 'react';
import { Select, Space } from 'antd';

interface Option {
    defaultValue?: any;
    options?: object[];
    onChange?: any;
}

const Filter: React.FC<Option> = ({
    defaultValue,
    options,
    onChange
}) => (
    <Space wrap>
        <Select
            defaultValue={defaultValue}
            style={{ width: 120, marginBottom: 30 }}
            onChange={onChange}
            options={options}
        />
    </Space>
);

export default Filter;