import React from 'react'
import ExploreCard from './ExploreCard';

const ExploreSection = (props) => {
    const sectionImages = props.images
    return (
        <div>
        <h1>{props.title} </h1>
      <div id="sports">
      
      { sectionImages.map((i,key)=><ExploreCard image={i} />)}       
       
      </div>
            
        </div>
    )
}

export default ExploreSection
