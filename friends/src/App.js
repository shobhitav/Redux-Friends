import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";

function App() {
  return (
    <Router>
      <div className="App">
      <div className="NavBar">
            <NavLink exact={true} to="/login" className="inactive" activeClassName="active">Login</NavLink>
            <NavLink exact={true} to="/friendList" className="inactive" activeClassName="active">Friend List</NavLink> 
            <NavLink exact={true} to="/addFriend" className="inactive" activeClassName="active">Add Friend</NavLink> 
          </div>      
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/friendList" component={FriendList} />
        <PrivateRoute exact path="/addFriend" component={AddFriend} />
        <PrivateRoute exact path="/updateFriend" component={UpdateFriend} />
      </div>
    </Router>
  );
}

export default App;
