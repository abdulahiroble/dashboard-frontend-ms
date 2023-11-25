import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import DataTable from './DataTable';
import {
    TableOutlined,
    BarChartOutlined,
    HomeOutlined
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Asset Map', 'sub1', <HomeOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Asset Table', 'sub2', <TableOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),

    getItem('Asset Charts', 'sub3', <BarChartOutlined />, [
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ]),
];

const Sidebar: React.FC = () => {
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
                {/* <BarChartOutlined color='white' /> */}
                <div className="demo-logo-vertical" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>
                        <DataTable />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Sidebar;