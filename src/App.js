import './App.css';
import NavBar from './cmps/NavBar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import PostPopup from './cmps/feed-cmps/PostPopup';
import { Switch, Route } from 'react-router-dom';
import React from 'react';
function App() {
  const logiz = true;

  const isLoggedIn = () => {
    if (logiz) {
      return (
        <React.Fragment>
          <Feed />; <NavBar />
        </React.Fragment>
      );
    }
  };

  return (
    <div className="App">
      <Switch>
        <Route path="/p/:postId">
          <PostPopup />{' '}
        </Route>
        <Route path="/" exact>
          {logiz ? isLoggedIn() : <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

{
  /* {logiz ? isLoggedIn(): <Login />} */
}
