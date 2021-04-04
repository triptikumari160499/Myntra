import React from 'react';
import './App.css';
import Style from './Components/Styling/Styling';
import Main from './Components/Main/main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './Components/Chat/chat';
class App extends React.Component
{
  render()
  {
    return (
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
) } }
 export default App;