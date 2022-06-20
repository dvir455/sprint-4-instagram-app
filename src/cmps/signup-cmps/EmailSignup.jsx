import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userService } from '../../services/user.service'
import { useHistory } from 'react-router-dom'
const EmailSignup = (props) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    dispatch(userService.signup({ email, fullname, username, password })).then(() => {
      history.push('/')
    }).catch(err => { console.log(err) })
  }


  return (
    <div className="EmailSignup__Cmp__Container">
      <div className="EmailSignup__Container">
        <div className="EmailSignup__formArea">
          <div className="EmailSignup__formArea__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
          </div>
          <div className="EmailSignup__form">
            <form onSubmit={handleSignup}>
              <h2>Sign up to see photos and videos from your friends.</h2>
              <div className="EmailSignup__formArea__FacebookLogin">
                <button type="button">
                  <span><FontAwesomeIcon icon={faFacebookSquare} /></span>

                  Log in with Facebook</button>
              </div>
              <div className="EmailSignup__OrDevider">
                <div className="EmailSignup__devider"></div>
                <div className="EmailSignup__Or">OR</div>
                <div className="EmailSignup__devider"></div>
              </div>
              <div className="EmailSignup__Input__Container">
                <div className={`EmailSignup__Email__Input ${email ? "input__active" : ''}`}>


                  <label ><span > Email</span> <input required aria-label="Email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(event) => {
                    setEmail(event.target.value)
                  }} /></label>
                  <div className="EmailSignup__Auth"></div>


                </div>
              </div>
              <div className="EmailSignup__Input__Container" >
                <div className={`EmailSignup__fullName__Input ${fullname ? "input__active" : ''}`}>
                  <label ><span > Full Name</span> <input required aria-label="FullName" name="fullname" type="text" onChange={(event) => {
                    setFullname(event.target.value)
                  }} /></label>
                  <div className="EmailSignup__Auth"></div>

                </div>
              </div>
              <div className="EmailSignup__Input__Container">
                <div className={`EmailSignup__userName__Input ${username ? "input__active" : ''}`}>
                  <label ><span > Username</span> <input required aria-label="Username" name="username" type="text" onChange={(event) => {
                    setUsername(event.target.value)
                  }} /></label>
                  <div className="EmailSignup__Auth"></div>

                </div>
              </div>
              <div className="EmailSignup__Input__Container">
                <div className={`EmailSignup__passWord__Input ${password ? "input__active" : ''}`}>
                  <label ><span > Password</span> <input required aria-label="Password" name="password" type="text" onChange={(event) => {
                    setPassword(event.target.value)
                  }} /></label>
                  <div className="EmailSignup__Auth"></div>

                </div>
              </div>
              <p className='EmailSignup__Info'>People who use our service may have uploaded your contact information to Instagram.
                <a href="https://www.facebook.com/help/instagram/261704639352628" target="_blank"> Learn More</a>
                <br />
                <br />
                By signing up, you agree to our <a href="https://help.instagram.com/581066165581870" target="_blank">Terms</a>, <a href="https://help.instagram.com/519522125107875" target="_blank">Data Policy</a>, and <a href="/legal/cookies/" target="_blank">Cookies Policy</a>.
              </p>
              <div>
                <div className="EmailSignup__Submit">
                  <button type='submit' disabled={(!fullname || !username || !password || !email)}>Sign Up</button>
                </div>
              </div>
            </form>
          </div>


        </div>
        <div className="EmailSignup__Login">Have an account? <Link to={`/`}> Log in</Link></div>
        <div className="EmailSignup__Gettheapp">
          <p>Get the app.</p>
          <div className="EmailSignup__Applinks">
            <a aria-label="Download on the App Store" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" > <img alt="Download on the App Store" src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" /></a>
            <a aria-label="Get it on Google Play" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D425358FF-F5FF-473F-AD94-BE55AE6667E3%26utm_content%3Dlo%26utm_medium%3Dbadge"><img alt="Get it on Google Play" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSignup;