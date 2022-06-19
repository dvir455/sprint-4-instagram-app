import {useDispatch } from 'react-redux';
import { userService } from '../services/user.service';

const NavBar = () => {
const dispatch = useDispatch();
  const logoutHandler = () => {
    try{
      dispatch(userService.logout());
    } catch(e){
      console.log(e);
    }
  }

  return (
    <div className="nav-borders">
      <nav className="nav-container">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="nav-actions"><button onClick={logoutHandler}>Logout</button></div>
      </nav>
    </div>
  );
};

export default NavBar;
