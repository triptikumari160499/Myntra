import React from "react";
import Chatbot from "react-chatbot-kit";
// import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import "./Chatbot.css";
import {createChatBotMessage} from "react-chatbot-kit";
import Options from './Option/Option';
import Quiz from './Quiz/Quiz';

function Mainfile() {
  const config = {
    botName: "LearningBot",
    initialMessages: [
      createChatBotMessage(`Hello. Hope you are in great health!`),
      createChatBotMessage('So What are you looking for??', {
        widget: "options",
      }),
    ],
    widgets: [
      {
        widgetName: "options",
        widgetFunc: (props) => <Options {...props} />,
      },
      {
        widgetName: "javascriptQuiz",
        widgetFunc: (props) => <Quiz {...props} />,
        props: {
          questions: [
            {
              question: "What is closure?",
              answer:
                "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
              id: 1,
            },
            {
              question: "Explain prototypal inheritance",
              answer:
                "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
              id: 2,
            },
          ],
        },
      },
    ],
  };
  
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
