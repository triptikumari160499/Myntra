import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";
import axios from "axios";
import MyMessage from "../../Chat/MyMessage";

const ExploreCard = (props) => {
  const sendImage = props.image;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: `https://api.chatengine.io/chats/`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Project-ID": "dd1bb131-88b0-4213-835c-26ee5449ff0b",
        "User-Name": "Anshul",
        "User-Secret": "123",
      },
    }).then((res) => {
      setData(res.data);
    });
  });
  const ClickHandler =(id) =>{
    axios({
      url: `https://api.chatengine.io/chats/${id}/messages/`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Project-ID": "dd1bb131-88b0-4213-835c-26ee5449ff0b",
        "User-Name": "Anshul",
        "User-Secret": "123",
      },
      data:{"text":"Image Sent"}
    })
  }

  const share = () => {
    swal("Good job!", "You clicked the button!", "success");
  };
  return (
    <>
      <div class="col mt-4">
        <div className="card">
          <img src={props.image} alt="" />
          <div class="card-link-div card-body">
            <Button
              variant="light"
              style={{ cursor: "pointer" }}
              onClick={share}
              class="card-link"
            >
              <i class="far fa-heart"></i>
            </Button>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i class="fas fa-user-friends"></i>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {data
                  ? data.map((chat, key) => (
                      <Button onClick={(id)=>ClickHandler(chat.id)}><Dropdown.Item href="/Chat" key={key}>{chat.title}</Dropdown.Item></Button>
                    ))
                  : null}
              </Dropdown.Menu>
            </Dropdown>
            {/* <Link to="/chat">
                                    <Button variant="light" ><i class="fas fa-share-alt"></i>                    
                                    </Button>
                                </Link> */}

            <Link to="/stories">
              <Button variant="light">
                <i class="fas fa-insta">
                  <i class="fab fa-instagram"></i>
                </i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreCard;
