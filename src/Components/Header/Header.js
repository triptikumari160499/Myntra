import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="nav">
        <a href="#">
          <img src="https://images.assettype.com/afaqs%2F2021-01%2F51966c7c-de5b-4092-ac03-e1f5e6152b32%2Fmyntra.png?auto=format%2Ccompress&w=1200" />
        </a>
        <div className="item_container">
          <div id="items">
            <a className="nav_item">MEN</a>
          </div>
          <div id="items">
            <a className="nav_item">WOMEN</a>
          </div>
          <div id="items">
            <a className="nav_item">KIDS</a>
          </div>
          <div id="items">
            <a className="nav_item">HOME & LIVING</a>
          </div>
          <div id="items">
            <a className="nav_item">OFFERS</a>
          </div>
        </div>

        <div id="searchbar">
          <i class="ri-search-line"></i>
          <h6>Search for products, brands and more</h6>
        </div>

        <div id="profile">
          <Link className="link"><i className="fas fa-user-circle" title="Profile"></i></Link>
          <Link className="link"><i className="fas fa-heart" title="Wishlist"></i></Link>
          {/* Links to the Chat Component */}
          <Link to="/chat" className="link">
          <i className="fad fa-comments-alt" title="Chat with Friends"></i>
          </Link>
          <Link className="link"> <i className="fas fa-cart-plus" title="Cart"></i></Link>
        </div>
      </div>
    </>
  );
}

export default Header;
