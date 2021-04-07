import React, { Component } from 'react';

import Stories from 'react-insta-stories';
const s1= [{url:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg"},
				{url:"https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2020/7/28/655751e9-66c3-49b5-acfc-a508068e6e581595936000398-Content-westernwear-Trends-Vibrantcolourblocks.jpg"}]
const InstaStories = () => {
	return (
		<Stories
			stories={s1}
			defaultInterval={1500}
			width={432}
			height={768}
		/>
	);
};
export default InstaStories;