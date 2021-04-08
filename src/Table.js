import React from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: (text, record) => {
     return (
      <div>
      <img src={record.productimage}/>
      {/*<Avatar src={record.productimage}/> */}
        <div>
         <div>{record.productnumber}</div>
         <a href="javascript:alert('ciao');">{record.productname}</a>
         </div>
      </div>
    );},
  }, 
 {
  title: 'Address',
  dataIndex: 'address', 
  key: 'address',  
 },
 {
  title: 'age',
  dataIndex: 'age', 
  key: 'age',
 },
 
 ];

const data = [{
  key: '1',
  productimage:'https://img.icons8.com/dusk/2x/chart.png',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  address: 'New York No. 1 Lake Park',
  age: 32,
  Tags: ['M', 'Blue'],
  }, 
  {
  key: '2',
  productimage:'https://img.icons8.com/dusk/2x/customer-insight.png',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  address: 'New York No. 1 Lake Park',
  age: 32,
  tags: ['XL', 'orange'],
  }, 
  {
  key: '3',
  productimage:'https://img.icons8.com/dusk/2x/barcode-scanner.png',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  address: 'New York No. 1 Lake Park',
  age: 32,
  
  }, 
  {
  key: '4',
  productimage:'https://img.icons8.com/dusk/2x/squared-menu.png',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  address: 'New York No. 1 Lake Park',
  age: 32,
}];

  const Tables=()=>{
    return <Table dataSource={data} columns={columns} />;
  }
  export default Tables;