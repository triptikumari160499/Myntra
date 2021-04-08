import React from "react";
import {Table} from "antd";
import 'antd/dist/antd.css';
import Style from "./Components/Styling/Styling";
const columns = [{
  title: 'Product',
  dataIndex: 'Product',
  key: 'Product',
  render: (text, record) => {
     return (
      <div>
      <img src={record.productimage}/>
      {/*<Avatar src={record.productimage}/> */}
        
         <div>{record.productnumber}</div>
         <a href="javascript:alert('Check');">{record.productname}</a>
         </div>
    );},
  }, 

  {
    title: 'Sender',
    dataIndex: 'Sender', 
    key: 'Sender',  
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
 {
  title: 'Delete',
  dataIndex: 'Delete', 
  key: 'Delete', 
  render: (text, record) => {
    return (
     <div>
     {/*<Avatar src={record.productimage}/> */}
       
        <a href="javascript:alert('Deleted');">{record.Delete}</a>
        </div>
   );}, 
 },
 ];
const data = [{
  key: '1',
  productimage:'https://assets.myntassets.com/dpr_1.5,q_60,w_100,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg',
  productnumber:'Dennis Lingo',
  productname:'Men Slim Fit Casual Shirt',
  Sender:'Tripti',
  address: 'New York No. 1 Lake Park',
  age: 32,
  Tags: ['M', 'Blue'],
  Delete: 'Delete',
  }, 
  {
  key: '2',
  productimage:'https://assets.myntassets.com/dpr_1.5,q_60,w_100,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg',
  productnumber:'HERE&NOW',
  productname:'Men Red & Black Regular Fit Checked Casual Shirt',
  Sender:'Tripti',
  address: 'New York No. 1 Lake Park',
  age: 32,
  tags: ['XL', 'orange'],
  Delete: 'Delete',
  }, 
  {
  key: '3',
  productimage:'https://assets.myntassets.com/dpr_1.5,q_60,w_100,c_limit,fl_progressive/assets/images/productimage/2020/1/11/eb462dc3-eee9-4e28-ad71-07dc4c6410961578698196717-1.jpg',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  Sender:'Tripti',
  address: 'New York No. 1 Lake Park',
  age: 32,
  Delete: 'Delete',
  }, 
  {
  key: '4',
  productimage:'https://assets.myntassets.com/fl_progressive/q_80,w_150/v1/assets/images/8802271/2019/2/25/4265862d-956f-44a3-80b0-89147b9fe18b1551097050778-StyleStone-Womens-Tie-up-Rainbow-Print-Maxi-dress-4391551097-1.jpg',
  productnumber:'123456-1234-56',
  productname:'AAAAA',
  Sender:'Tripti',
  address: 'New York No. 1 Lake Park',
  age: 32,
  Delete: 'Delete',
}];
  const Tables=()=>{
    return <Table dataSource={data} columns={columns} />;
  }
  export default Tables;