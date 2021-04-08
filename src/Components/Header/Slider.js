import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "350px",
  width: "100%",
};

function Slider() {
  return (
    <>
      <Carousel autoplay effect="fade">
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/dc6cf926-8dfe-4161-b4d0-e78c622df2771615743989381-Desktop-Shop-Now.gif"
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/1ae5e872-3528-463a-8968-d4edb5a281791615735151188-Lifestyle_Desk_Banner.jpg"
            alt=""
            style={contentStyle}
          />
        </div>
        <div>
          <img
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/3/14/92d441e5-422c-425b-91a6-0da8c398f55c1615735151174-cat-fest-dk-mar.jpg"
            alt=""
            style={contentStyle}
          />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
