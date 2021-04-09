import React from "react";

import {westernImages,indianImages,sportImages,footwearImages,accessoriesImages} from '../Images'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import ChatBot from "../Chatbot/ChatBot";
import Header from "../Header/Header";
import Slider from "../Header/Slider";
import SectionOne from "../Body/SectionOne";
import SectionTwo from "../Body/SectionTwo";
import SectionThree from "../Body/SectionThree";
import SectionFour from "../Body/SectionFour";
import ExploreSection from "../Body/Explore Section/ExploreSection";
import Footer from "../Footer/Footer";
import Text from "../Footer/Text";


class Style extends React.Component {

  render() {
    return (
      <div id="container">
       <ChatBot />
        <header>
          <Header />
          <br /><br /><br />
          <Slider />
        </header>

        <SectionOne title="DEALS OF THE DAY"/>
        <SectionTwo title="BIGGEST DEALS ON TOP BRANDS" />
        <SectionThree title="CATEGORIES TO BAG" />
        <SectionFour title="EXPLORE TOP BRANDS" />
        
        
        <ExploreSection title="WESTERN WEAR" images={westernImages} />
        <ExploreSection title="TRENDING IN INDIAN WEAR" images={indianImages} />
        <ExploreSection title="TRENDING IN SPORTS WEAR" images={sportImages} />
        <ExploreSection title="TRENDING IN FOOTWEAR" images={footwearImages} />
        <ExploreSection title="TRENDING IN ACCESSORIES" images={accessoriesImages} />

        <hr></hr>
        <footer id="footer">
          <Footer />
          <hr></hr>
          <Text />
        </footer>
      </div>
    );
  }
}

export default Style;
