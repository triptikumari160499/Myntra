import React, { Component } from 'react';

import Stories from 'react-insta-stories';

const App = () => {
	return (
		<Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
		/>
	);
};