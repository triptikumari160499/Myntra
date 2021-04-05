import React from 'react';
import './App.css';
import Style from './Components/Styling/Styling';
import Main from './Components/Main/main';
import Chat from './Components/Chat/chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Form1 from './Components/Chat/Properties/Form';

class App extends React.Component
{
  render()
  {
    return (
      <div>
      
     //Switches to the route
     <Switch>
     {/* Home Route */}
         <Route 
           exact path="/"
           component={Style}/>
     {/* Chat Component */}
         <Route 
           exact path="/chat" 
           component={Chat}/>
     </Switch>
     </div>
     
     
) } }
 export default App;