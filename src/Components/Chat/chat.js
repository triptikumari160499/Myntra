import { ChatCard, ChatEngine } from 'react-chat-engine';
import './chat.css';
import ChatFeed from './ChatFeed';
import LoginForm from './LoginForm';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
//import './App.css';
// import Main from '../Main/main';
import React, { Component }  from 'react';

const projectID = 'dd1bb131-88b0-4213-835c-26ee5449ff0b';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    
    <Link to="/Tables">  <Button variant="light" className = "float"><i class="fas fa-robot my-float"></i>
                                </Button>
                                </Link>
    </div>
    
  );
};

// infinite scroll, logout, more customizations...

export default Chat;