import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";
import axios from "axios";

const ExploreCard = (props) => {
  const sendImg = props.image;
  const [data, setData] = useState([]);
  useEffect(
    async () => {
    await axios({
      url: `https://api.chatengine.io/chats/`,
      method: "get",
      headers: {
        
        "Content-Type": "application/json",
        "Project-ID": "074fa758-92f5-45e0-baeb-00b7bbf5e367",
        "User-Name": "Anshul",
        "User-Secret": "anshul",
      },
    }).then((res) => {
      setData(res.data);
    });
  }, []);

  async function ClickHandler(id) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
       const body = {
      chat_id: id,
downvotes: "1",
enabled: true,
img_src: sendImg,
id: "11",
sender: "Anshul",
upvotes: "1",
    };
    const res = await axios.post(
      "https://myntra-backend-hackathon.herokuapp.com/tracks/",
      body,
      config
    );
    console.log(res);
  }

  const share = () => {
    swal("Yeahh!!", "Item added to Wishlist", "success");
  };
  return (
    <>
    
      <div class="col mt-4">
      
        <div className="card">
        <Link to="/Photo">
          <img src={props.image} alt="" />
          </Link>
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
                  ? data.map((chat, idx) => (
                      <Button variant = "light" onClick={() => ClickHandler(chat.id) }>
                        <Dropdown.Item href="/chat" >{chat.title}</Dropdown.Item>
                      </Button>
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
