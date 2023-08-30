import React, { useState } from 'react';
import { Table, Button } from 'antd';


const MyTable = () => {
  const [selectedRowsKeys, setSelectedRowsKeys] = useState([]);

  const onSelectChange = selectedRowKeys => {
    setSelectedRowsKeys(selectedRowKeys);
  };

  const rowSelection = {
    selectedRowsKeys,
    onChange: onSelectChange,
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    // Add more columns as needed
  ];

  const data = [
    {
      key: '1',
      name: 'John',
      age: 25,
    },
    {
      key: '2',
      name: 'Jane',
      age: 30,
    },
    // Add more data rows
  ];

  return (
    <div>
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Button onClick={() => console.log('Selected Rows:', selectedRowsKeys)}>
        Show Selected Rows
      </Button>



      
    </div>
  );
};

export default MyTable;
