import React from "react";

import "./Option.css";

const Options = (props) => {
  const options = [
    {
      text: "Clothing",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Footwear", handler: () => {}, id: 2 },
    { text: "Accessories", handler: () => {}, id: 3 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
