import React from "react";
import Chatbot from "react-chatbot-kit";
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import "./Chatbot.css";

function Mainfile() {
  return (
    <div className="App">
      <div style={{ maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </div>
    </div>
  );
}

export default Mainfile;
