import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, Button } from 'antd';
import { useNavigate } from 'react-router-dom';



const NavBar: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        // localStorage.removeItem('admin')
        navigate('/login')
    }


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
                        <Button danger style={{ width: "100%" }} onClick={logout}>Logout</Button>
                    ),
                    key: 'logout',
                },
            ],
        },
    ];



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