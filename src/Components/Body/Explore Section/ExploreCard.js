import React from 'react'
import { Link } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";

const ExploreCard = (props) => {
    const share = () => {
        swal("Good job!", "You clicked the button!", "success");
      };
    return (
        <>
        <div id="western1">
            <div class="westernimg">
              <img
                src={props.image}
                alt=""
              ></img>
            </div>
            <div class="card-link-div ">
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
                  <Dropdown.Item href="#/action-1">Myntra</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Chat</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
            
        </>
    )
}

export default ExploreCard
