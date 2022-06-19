import { userService } from "../../services/user.service";
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
const LoginCmp = () => {

  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    if (password.length === 0 || username.length === 0) return;
    dispatch(userService.login({ username, password }));
  }

  return (
    <section className="logincmp-container">
      <div className="login-cmp-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
      </div>
      <div className="LoginCmp__LoginSection">
        <form action="" className="LoginCmp__form" onSubmit={loginHandler}>
          <input type="text" placeholder="Phone number, username, or email" onChange={(event) => {
            setUsername(event.target.value);
          }} />
          <input type="text" placeholder="Password" onChange={(event) => {
            setPassword(event.target.value);
          }} />
          <button className="LoginCmp__LoginBtn">Log In</button>
        </form>
        <div className="LoginCmp__OrDevider">
          <div className="LoginCmp__devider"></div>
          <div className="LoginCmp__Or">OR</div>
          <div className="LoginCmp__devider"></div>
        </div>
        <div className="LoginCmp__OtherOptions">
          <a href="">Log in with Facebook</a>
          <a href="">Forgot password?</a>
        </div>
      </div>
    </section>
  );
};

export default LoginCmp;
