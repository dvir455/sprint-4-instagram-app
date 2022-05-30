const LoginCmp = () => {
  return (
    <section className="logincmp-container">
      <div className="login-cmp-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
      </div>
      <div className="LoginCmp__LoginSection">
        <form action="" className="LoginCmp__form">
          <input type="text" placeholder="Phone number, username, or email" />
          <input type="text" placeholder="Password" />
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
