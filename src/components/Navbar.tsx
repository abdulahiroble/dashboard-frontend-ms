import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: 'Navigation One',
        key: 'mail',
        icon: <MailOutlined />,
    },
    {
        label: 'Menu',
        key: 'Menu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Change tenant
                    </a>
                ),
                key: 'change-tenant',
            },
            {
                type: 'group',
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Account settings
                    </a>
                ),
                key: 'account-settings',
            },
            {
                type: 'group',
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Logout
                    </a>
                ),
                key: 'logout',
            },
        ],
    },
];

const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} style={{
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'end',
    }} />;
};

export default NavBar;