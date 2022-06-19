import LoginCmp from '../cmps/login-cmps/LoginCmp';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <div className="Login__Img__Container"></div>
      <div>
        <LoginCmp />
        <div className="Login__SignUp">Don't have an account? <Link to={`/emailsignup`}> Sign up</Link></div>
      </div>
    </div>
  );
};

export default Login;
