import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";
import "antd/dist/antd.css";
// import { Button } from "bootstrap";
import Button from "react-bootstrap/Button";
import Chart from "react-google-charts";
import "./cust.css";
import axios from "axios";

const pieOptions = {
  title: "",
  pieHole: 0,
  slices: [
    {
      color: "#23c436",
    },
    {
      color: "#fc3d70",
    },
    {
      color: "#007fad",
    },
    {
      color: "#e9a227",
    },
  ],
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14,
    },
  },
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 10,
    top: 10,
    width: "100%",
    height: "80%",
  },
  fontName: "Roboto",
};

const Tables = () => {
  const [finalData, setFinalData] = useState([]);
  const [data, setVote] = useState([finalData]);
  useEffect(async () => {
    const res = await axios.get(
      "https://myntra-backend-hackathon.herokuapp.com/tracks/"
    );
    setFinalData(res.data);
  }, []);

  const VoteHandler = (record, type) => {
    const id = record["post_id"];
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let newArr = [];

    //for Deleting the item
    if (type === 3) {
      finalData.forEach((element) => {
        if (element["post_id"] === record["post_id"]) {
          axios
            .delete(
              `https://myntra-backend-hackathon.herokuapp.com/track/delete/${id}`
            )
            .then((res) => console.log(res))
            .catch((er) => console.log(er));
        }
      });
      alert("Product deleted ??");
    } else {
      newArr = [...finalData];
    }
    //for handling votes
    finalData.forEach((element) => {
      if (element["post_id"] === record["post_id"]) {
        //Disables vote

        if (type === 2) {
          const disable = {
            enabled: false,
          };
          axios
            .put(
              `https://myntra-backend-hackathon.herokuapp.com/track/disable/${id}`,
              disable,
              config
            )
            .then((res) => console.log(res))
            .catch((er) => console.log(er));
          element["enabled"] = false;
          alert("Polls Disabled!!");
        }
        if (element["enabled"] == true) {
          //Upvotes
          if (type === 0) {
            element["upvotes"] += 1;
            const up = {
              upvotes: element["upvotes"],
            };
            axios
              .put(
                `https://myntra-backend-hackathon.herokuapp.com/track/upvote/${id}`,
                up,
                config
              )
              .then((res) => console.log(res))
              .catch((er) => console.log(er));
          } else if (type === 1) {
            //Downvotes
            element["downvotes"] += 1;
            const down = {
              downvotes: element["downvotes"],
            };
            axios
              .put(
                `https://myntra-backend-hackathon.herokuapp.com/track/downvote/${id}`,
                down,
                config
              )
              .then((res) => console.log(res))
              .catch((er) => console.log(er));
          }
        }
      }

      setVote(newArr); // set the Changed state
    });
  };

  // COLUMNS
  const columns = [
    {
      title: "Product",
      dataIndex: "img_src",
      key: "img_src",
      render: (text, record) => {
        return (
          <div>
            <img className="productImage" src={record.img_src} />
          </div>
        );
      },
    },
    {
      title: "Visual Trend",
      dataIndex: "polls",
      key: "Graph",
      render: (text, record) => {
        return (
          <div className="chartstyle">
            <Chart
              chartType="PieChart"
              data={[
                ["Ups", "Downs"],
                ["Ups", record["upvotes"]],
                ["Downs", record["downvotes"]],
              ]}
              options={pieOptions}
              width={"100%"}
              height={"200px"}
              legend_toggle
            />
          </div>
        );
      },
    },
    {
      title: "User Polls",
      dataIndex: "polls",
      key: "Polls",
      render: (text, record) => {
        return (
          <div class="container">
            <div class="row spacing">
              <div class="col-xs-4">
                <Button
                  variant="light"
                  onClick={() => {
                    VoteHandler(record, 0);
                  }}
                >
                  <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                </Button>
              </div>
              <div class="col-xs-4 colspace">{record.upvotes}</div>
            </div>

            <div class="row spacing">
              <div class="col-xs-4 ">
                <Button
                  variant="light"
                  onClick={() => {
                    VoteHandler(record, 1);
                  }}
                >
                  <i class="fa fa-thumbs-down"></i>
                </Button>
              </div>
              <div class="col-xs-4 colspace">{record.downvotes}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
    },
    {
      title: "Disable Poll",
      key: "enabled",
      render: (text, record) => {
        return (
          <div>
            <Button onClick={() => VoteHandler(record, 2)}>Disable</Button>
          </div>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "Delete",
      key: "Delete",
      render: (text, record) => {
        return (
          <div>
            <Button variant="danger" onClick={() => VoteHandler(record, 3)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="stylerbg">
      <div className="container header"> Room Wishlist </div>
      <div className="tableStyle">
        <Table dataSource={finalData} columns={columns} align="center" />;
      </div>
    </div>
  );
};

export default Tables;
