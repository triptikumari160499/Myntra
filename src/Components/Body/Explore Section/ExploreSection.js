import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreSection = (props) => {
  const sectionImages = props.images;
  return (
    <div>
      <h1 id="g">{props.title} </h1>
      <div id="sports">
        <div class="container-fluid mb-4">
          <div class="row justify-content-center row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {sectionImages.map((i, key) => (
              <ExploreCard image={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
