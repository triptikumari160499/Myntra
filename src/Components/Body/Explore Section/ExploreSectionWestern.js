import React from 'react'
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import swal from "sweetalert";
import ExploreCard from './ExploreCard';

const ExploreSectionWestern = (props) => {
    const share = () => {
        swal("Good job!", "You clicked the button!", "success");
      };
    return (
        <div>
        <h1>{props.title} </h1>
        <div id="western">
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d53a46d7-e8f8-4f7e-9e1a-6cb997d1a1e51597840566613-Content-westerncasual-brand-modarapidoskinnyjeans.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/b85eb6be-0223-4cca-bc81-56ca3089daf11597841355970-Content-westernwear-Essentials-Women-s-Trousers--copy--.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/20/5b3b3f9a-d893-4f15-9e1c-c7667bca41091597912691188-Content-westerncasual-trend-superhero.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/f7585d6d-78ee-42bd-baf2-07eefada7fb31597840566666-Content-westerncasual-color-moss.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/d7f59b96-8e15-470e-a47b-5d5005e4273f1597840566776-Content-westerncasual-mostselling-modblocking.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/8/19/8116410f-af2c-4980-95ef-04a4162092491597840566722-Content-westerncasual-color-preppyred.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/retaillabs/2020/8/21/580b804c-c529-421c-b0be-b311cab6e10b1598030134933-Content-mostselling-casualwear-Normalisboring.jpg" />
          <ExploreCard image="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/a6d9d467-d37e-4428-b2dd-a9f45756c1fc1595936000278-Content-westernwear-lifestyle-Ecovero.jpg" />
        </div>
            
        </div>
    )
}

export default ExploreSectionWestern
