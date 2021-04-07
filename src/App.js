import React from 'react';
import './App.css';
import Style from './Components/Styling/Styling';
import Main from './Components/Main/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Components/Chat/chat';
import ChatBot from "./Components/Chatbot/mainfile";
import Stories from "./Components/Chat/InstaStories";
//import Form1 from './Components/Chat/Properties/Form';

class App extends React.Component
{
  render()
  {
    return (
      <div>
      
     {/* //Switches to the route */}
     <Switch>
     {/* Home Route */}
         <Route 
           exact path="/"
           component={Style}/>
     {/* Chat Component */}
         <Route 
           exact path="/chat" 
           component={Chat}/>
            {/* ChatBot Component */}
         <Route 
           exact path="/ChatBot" 
           component={ChatBot}/>
          {/* Stories Component */}
         <Route 
           exact path="/Stories" 
           component={Stories}/>
     </Switch>
     </div>
     
     
) } }
 export default App;