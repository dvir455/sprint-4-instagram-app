import './App.css';
import NavBar from './cmps/NavBar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import PostPopup from './cmps/feed-cmps/PostPopup';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React from 'react';
function App() {
  const loggedIn = useSelector(state => state.user.user);

  const isLoggedIn = () => {
    if (loggedIn) {
      return (
        <React.Fragment>
          <Feed />
          <NavBar />
        </React.Fragment>
      );
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/p/:postId">
          <PostPopup />
        </Route>
        <Route path="/" exact>
          {loggedIn ? isLoggedIn() : <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
