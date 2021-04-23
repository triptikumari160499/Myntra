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

const projectID = '074fa758-92f5-45e0-baeb-00b7bbf5e367';

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
    
    <Link to="/Tables">  <Button variant="light" className = "float"><i class="fas fa-database my-float"></i>
                                </Button>
                                </Link>
    </div>
    
  );
};

// infinite scroll, logout, more customizations...

export default Chat;