import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Sidebar from '../components/Sidbar';
import Tab from '../components/Tabs';
import LoadFerretCountsCollection from '../services/collections/LoadFerretCountsCollection';
import Filter from '../components/Filter';

interface DataType {
    count: number;
    version_id: number;
    tenant: any;
    version_time_finished: string | null;
    data_uploaded: string;
    asset_category: string;
    asset_type: any;
    asset_type_id: any;
    address: any;
}

const AssetQualityTable: React.FC = () => {

    const [column, setColumns] = useState<any>(null);
    const [filter, setFilter] = useState<any>(null);
    const [filter2, setFilter2] = useState<any>(null);

    const columns: ColumnsType<DataType> = [
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count',
        },
        {
            title: 'Version Id',
            dataIndex: 'version_id',
            key: 'version_id',
            sorter: (a, b) => a.version_id - b.version_id,
            defaultSortOrder: 'descend',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tenant',
            dataIndex: 'tenant',
            key: 'tenant',
            filters: filter?.map((item: any) => {
                return {
                    text: item,
                    value: item,
                }
            }),
            onFilter: (value, record) => record.tenant.indexOf(value) === 0,
        },
        {
            title: 'Version Time Finished',
            dataIndex: 'version_time_finished',
            key: 'version_time_finished',
        },
        {
            title: 'Data Uploaded',
            dataIndex: 'data_uploaded',
            key: 'data_uploaded',
        },
        {
            title: 'Asset Category',
            dataIndex: 'asset_category',
            key: 'asset_category',
        },
        {
            title: 'Asset Type',
            dataIndex: 'asset_type',
            key: 'asset_type',
            filters: filter2?.map((item: any) => {
                return {
                    text: item,
                    value: item,
                }
            }),
            onFilter: (value, record) => record.asset_type.indexOf(value) === 0,
        },
        {
            title: 'Asset Type Id',
            dataIndex: 'asset_type_id',
            key: 'asset_type_id',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        LoadFerretCountsCollection.getAllFerrets().then((result: any) => {
            const data = result.object.map((item: any) => {
                return {
                    count: item.count,
                    version_id: item.version_id,
                    tenant: item.tenant,
                    version_time_finished: item.version_time_finished ? new Date(item.version_time_finished).toLocaleString() : 'none',
                    data_uploaded: new Date(item.data_uploaded).toLocaleString(),
                    asset_category: item.asset_category,
                    asset_type: item.asset_type,
                    asset_type_id: item.asset_type_id,
                }

            })
            setColumns(data)
            let unique = [...new Set(data.map((item: any) => item.tenant)) as any];
            let asset_type = [...new Set(data.map((item: any) => item.asset_type)) as any];
            setFilter(unique)
            setFilter2(asset_type)
        })
    }, []);

    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <div className="App">
            <Sidebar>
                {/* <Filter defaultValue="All" onChange={onChange} options={
                    filter?.map((item: any) => {
                        return {
                            value: item,
                            label: item,
                            onFilter: (value: any, record: { tenant: string | any[]; }) => record.tenant.indexOf(value) === 0,
                        }
                    })
                } /> */}
                <Tab />
                <Table columns={columns} dataSource={column} onChange={onChange} />
            </Sidebar>
        </div>
    );
};

export default AssetQualityTable;