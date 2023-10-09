import React from 'react';
import './App.css';
import {  Routes, Route, Link} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';


 
 function App() {
  return (
    <div className="app">

      <Link classname="link" to="/login">Login</Link>
      <Link className="link" to="/friends">Friends List</Link>
      <Link className="link" to="/friends/add">Add Friend</Link>
      <Link className="link" to="/login">Logout</Link>


    <Routes>
    <Route exact path="/" element={<Login/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/friends"   element={<FriendsList/>}/>
    <Route exact path="/friends/add" element={<AddFriend />}/>
    <Route exact path="/logout" element={<Logout />}/>
    </Routes>


    
    </div>
   
   
    
    
    
  );
}

export default App;
