import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="nav">
        <img src="https://images.assettype.com/afaqs%2F2021-01%2F51966c7c-de5b-4092-ac03-e1f5e6152b32%2Fmyntra.png?auto=format%2Ccompress&w=1200"></img>
        <div id="items">
          <a className="nav_item">
            MEN
          </a>
          <a className="nav_item">
            WOMEN
          </a>
          <a className="nav_item">
            KIDS
          </a>
          <a className="nav_item">
            HOME & LIVING
          </a>
          <a className="nav_item">
            OFFERS
          </a>
        </div>

        <div id="searchbar">
          <i class="ri-search-line"></i>
          <h6>Search for products, brands and more</h6>
        </div>

        <div id="profile">
          <i id="pro" class="ri-account-pin-circle-line">
            <div id="line"></div>
          </i>
          <i class="ri-star-line"></i>
          {/* Links to the Chat Component */}
          <Link to="/chat">
            <i class="chaticon">Chat</i>
          </Link>
          <i class="ri-shopping-bag-line"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
