import React, { useEffect,useState } from "react";
import {Tag, Divider,Table} from "antd";
import 'antd/dist/antd.css';
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
import Chart from "react-google-charts";
import './cust.css';

import axios from "axios";


const Tables=()=>{
  const [data1, setData1] = useState({});

  useEffect(async () => {
    const res = await axios.get(
      "https://myntra-backend-hackathon.herokuapp.com/images/"
    );
    console.log(res.data);
    setData1(res.data);
    // const img=data1[7].img_src;

  }, []);
  // data1? console.log(data1[1].chat_id) :alert("Hi");
const VoteHandler = (record,type) =>{
    
    let newArr=[];
    //for Deleting the item
    if(type===3)
    { 
      data.forEach(element =>{
        if(element['key']===record['key'])
          return;
        newArr.push(element);
       });
       alert('Product :'+record.productnumber+' deleted!');
    }
    else{
      newArr=[...data]; // copy of existing data
    }
    //for handling votes
    data.forEach(element => {
      if(element['key']===record['key'])   // find the button to update state
      {
        //Disables vote
        if(type===2)
        {
          element['polls']['state']=false;
          alert('Polls Disabled for '+record.productnumber);
        }
        
        if(element['polls']['state']==true){
        //Upvotes
          if(type===0)
        element['polls']['up']+=1;
        else if(type===1)//Downvotes
        element['polls']['down']+=1;
        }
      }
      setVote(newArr); // set the Changed state
    });
  
   // console.log(record);
  }
  // const DownVoteHandler = () =>{
  //   setDownNumber(DownNumber+1)
  // }
  
  const [data,setVote] = useState([{
    key: '1',
    // productimage:img,
    productnumber:'Dennis Lingo',
    productname:'Men Slim Fit Casual Shirt',
    Sender:'Tripti',
    address: 'New York No. 1 Lake Park',
   
    tags: ['M', 'Green'],
    Delete: 'Delete',
    polls:{
      up:0,down: 0,state:true,
    },
    }, 
    {
    key: '2',
    productimage:'https://assets.myntassets.com/dpr_1.5,q_60,w_100,c_limit,fl_progressive/assets/images/2414313/2018/3/13/11520926368526-HERENOW-Men-Red--Black-Regular-Fit-Checked-Casual-Shirt-8881520926368447-1.jpg',
    productnumber:'HERE&NOW',
    productname:'Men Red & Black Regular Fit Checked Casual Shirt',
    Sender:'Tripti',
    address: 'New York No. 1 Lake Park',
    tags: ['XL', 'Red'],
    Delete: 'Delete',
    polls:{
      up:0,down: 0,state:true,
    },  
  }, 
    {
    key: '3',
    productimage:'https://assets.myntassets.com/dpr_1.5,q_60,w_100,c_limit,fl_progressive/assets/images/productimage/2020/1/11/eb462dc3-eee9-4e28-ad71-07dc4c6410961578698196717-1.jpg',
    productnumber:'Athena',
    productname:'Women Burgundy & Brown Embellished Sheath Dress',
    Sender:'Tripti',
    address: 'New York No. 1 Lake Park',
    tags: ['M', 'Silver'],
    Delete: 'Delete',
    polls:{
      up:0, down: 0,state:true,
    },  
  }, 
    {
    key: '4',
    productimage:'https://assets.myntassets.com/fl_progressive/q_80,w_150/v1/assets/images/8802271/2019/2/25/4265862d-956f-44a3-80b0-89147b9fe18b1551097050778-StyleStone-Womens-Tie-up-Rainbow-Print-Maxi-dress-4391551097-1.jpg',
    productnumber:'StyleStone',
    productname:'Rainbow Print Tie-Up Midi Dress',
    Sender:'Tripti',
    address: 'New York No. 1 Lake Park',
    tags: ['L', 'Orange'],
    Delete: 'Delete',
    polls:{
      up: 0,down: 0,state:true,
    },
  }]);

  const pieOptions = {
    title: "",
    pieHole: 0,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 10,
      top: 10,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };


  // const [data,setDownNumber] = useState(data);
  const columns = [
    {
    title: 'Product',
    dataIndex: 'Product',
    key: 'Product',
    render: (text, record) => {
       return (
        <div >
        <img src={record.productimage}/>
        {/*<Avatar src={record.productimage}/> */}
          
           <div>{record.productnumber}</div>
           <a href="javascript:alert('Check');">{record.productname}</a>
           </div>
      );
      },
    }, 
    {
      title: 'Details',
      dataIndex: 'tags',
      key: 'Details',
      render: (text,record)=>{
        return(
          // Styling is done here (Capital case dark shade, Small case light shade)
          <div>
          {record.tags.map((tag)=> <Tag color={record.tags[1]}>{tag}</Tag>)}
          </div>
        );
      }
      ,
    },
    {
      title: 'Visual Trend',
      dataIndex: 'polls',
      key: 'Graph',
      render : (text,record)=>{
        return( 
          <div className="chartstyle">
        <Chart
          chartType="PieChart"
          data={[["Ups", "Downs"], ["Ups",record['polls']['up']], ["Downs", record['polls']['down']]]}
          options={pieOptions}
     
          width={"100%"}
          height={"200px"}
          legend_toggle
        />
      </div>
        )
      }
    },
    {
      title: 'User Polls',
      dataIndex: 'polls',
      key: 'Polls',
      render: (text,record)=>{
        return(
          // Styling is done here (Capital case dark shade, Small case light shade)
       
          <div class="container">
            <div class="row spacing">
              <div class="col-xs-4">
              <Button variant="light" onClick={()=>{VoteHandler(record,0)}}><i class="fa fa-thumbs-up" aria-hidden="true"></i></Button> 
              </div>
              <div class="col-xs-4 colspace">
              {record.polls['up']}
              </div>
          </div>
  
          <div class="row spacing">
              <div class="col-xs-4 ">
              <Button variant="light" onClick={()=>{VoteHandler(record,1)}}><i class="fa fa-thumbs-down"></i></Button> 
              </div>
              <div class="col-xs-4 colspace">
              {record.polls['down']}
              </div>
          </div>
  
            </div>    
        );
       }
      ,
    },
    {
      title: 'Sender',
      dataIndex: 'Sender', 
      key: 'Sender',  
     },
  //  {
  //   title: 'Address',
  //   dataIndex: 'address', 
  //   key: 'address',  
  //  },
   
   {
    title: 'Disable Poll',
    key: 'Disable', 
    render: (text, record) => {
      return (
       <div>
       {/*<Avatar src={record.productimage}/> */}
         {/* To Disable like dislike button */}
          <Button onClick={()=>VoteHandler(record,2)}>Disable</Button>
          </div>
     );}, 
   },
   {
    title: 'Delete',
    dataIndex: 'Delete', 
    key: 'Delete', 
    render: (text, record) => {
      return (
       <div>
       {/*<Avatar src={record.productimage}/> */}
         {/* To Disable like dislike button */}
          <Button variant="danger" onClick={()=>VoteHandler(record,3)}>{record.Delete}</Button>
          </div>
     );}, 
   },

   ];
   
  return <div className="stylerbg">
  <div className="container header"> Group Wishlist </div> 
  <div className="tableStyle">
  <Table dataSource={data} columns={columns} 
  align="center"
  />;
  </div>
  </div>  
}



  export default Tables;