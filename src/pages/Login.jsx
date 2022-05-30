import LoginCmp from '../cmps/login-cmps/LoginCmp';

const Login = () => {
  return (
    <div className="login-container">
      <div className="Login__Img__Container"></div>
      <div>
      <LoginCmp />
      <div className="Login__SignUp">Don't have an account? <a> Sign up</a></div>
      </div>
    </div>
  );
};

export default Login;
