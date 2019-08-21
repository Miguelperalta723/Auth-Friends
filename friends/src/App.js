import React from 'react';
import LoginForm from './components/LoginForm'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/login' component={LoginForm}/>
      <PrivateRoute exact path="/protected" component={FriendsList} />
    </div>
  );
}

export default App;
