import React, { useEffect, useState } from 'react';
import { Table, Form, Input, Button } from 'antd';
import jsonData from './data.json';

const ArrayTable = () => {
    const [data, setData] = useState(jsonData);

    const handleInputChange = (value, index, field) => {
        const newData = [data];
        newData[index] = { ...newData[index], [field]: value };
        setData(newData);
    };
    useEffect(()=>{
        document.title='ANTD Design';
    },[])

    const columns = [
        {
            title: 'SNO',
            dataIndex: 'field1',
            key: 'field1',
            render: (text, record, index) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'field1')}
                />
            ),
        },
        {
            title: 'Name',
            dataIndex: 'field2',
            key: 'field2',
            render: (text, record, index) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'field2')}
                />
            ),
        },
        {
            title: 'Age',
            dataIndex: 'field3',
            key: 'field3',
            render: (text, record, index) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'field3')}
                />
            ),
        },
        {
            title: 'Gender',
            dataIndex: 'field4',
            key: 'field4',
            render: (text, record, index) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'field4')}
                />
            ),
        },
        {
            title: 'Status',
            dataIndex: 'field5',
            key: 'field5',
            render: (text, record, index) => (
                <Input
                    value={text}
                    onChange={(e) => handleInputChange(e.target.value, index, 'field5')}
                />
            ),
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (text, record, index) => (
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            ),
        },
    ];

    const [form] = Form.useForm();

    const onFinish = (values) => {
        const updatedData = data.map((item, index) => ({
            ...item,
            ...values[index],
        }));
        setData(updatedData);
        console.log('Updated Data:', updatedData);
    };

    return (

        <div className="container mt-4">
           
            <div class="row">
                <div class="col-sm-9">
                    <Form form={form} onFinish={onFinish}>
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                            bordered
                            rowKey={(record, index) => index.toString()}
                        />
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ArrayTable;
