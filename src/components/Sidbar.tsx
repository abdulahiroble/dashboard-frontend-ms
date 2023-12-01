import React, { Children } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import DataTable from './DataTable';
import {
    TableOutlined,
    BarChartOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
    link?: React.ReactNode,
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        link,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    {
        label: 'General',
        key: 'General',
        icon: <HomeOutlined />,
        children: [
            {
                key: 'map',
                label: (
                    <Link to="/map">
                        Map
                    </Link>
                ),
            },
        ],
    },
    {
        label: 'Ferret',
        key: 'ferret',
        icon: <TableOutlined />,
        children: [
            {
                key: 'table',
                label: (
                    <Link to="/chart">
                        Chart
                    </Link>
                ),
            },
        ],
    },
    {
        label: 'Compsumption',
        key: 'SubMenu',
        icon: <BarChartOutlined />,
        children: [
            {
                key: 'table',
                label: (
                    <Link to="/table">
                        Table
                    </Link>
                ),
            },
        ],
    },
];

const Sidebar: any = ({ children }: any) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Link to="/">
                    <img alt="logo" src="/logo-white.svg" style={{ width: "72%", marginTop: "20px" }} />
                </Link>
                <br />
                <br />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content >
                    <div>
                        {children}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;