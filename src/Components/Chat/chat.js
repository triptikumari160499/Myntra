import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './ChatFeed';
import LoginForm from '../Chat/LoginForm';
//import './App.css';
import Main from '../Main/main';
const projectID = 'dd1bb131-88b0-4213-835c-26ee5449ff0b';

const Chat = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <div>
    <Main/>
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>
  );
};

// infinite scroll, logout, more customizations...

export default Chat;