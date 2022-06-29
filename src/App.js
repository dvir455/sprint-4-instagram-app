import './App.css';
import NavBar from './cmps/NavBar/NavBar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import PostPopup from './cmps/feed-cmps/PostPopup';
import { Switch, Router, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userService } from './services/user.service';

import React from 'react';
import EmailSignup from './cmps/signup-cmps/EmailSignup';
import Search from './pages/Search';

function App() {
  const location = useLocation();
  const background = location.state?.background;

  useEffect(() => {
    if (!background) document.body.style.overflow = 'auto';
    else document.body.style.overflow = 'hidden';
  }, [background]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userService.checkLoggon());
  }, []);

  const loggedIn = useSelector((state) => state.user.user);

  const isLoggedIn = () => {
    return (
      <React.Fragment>
        <NavBar />
        <Feed />
      </React.Fragment>
    );
  };

  return (
    <div className="App">
      <Switch location={background || location}>
        <Route path="/" exact>
          {loggedIn ? isLoggedIn() : <Login />}
        </Route>
        <Route path="/emailsignup" children={<EmailSignup />} />
        {/* <Route path="/search/:searchValue" children={<Search />} /> */}
      </Switch>
      {background && <Route path="/p/:postId" children={<PostPopup />} />}
    </div>
  );
}

export default App;
