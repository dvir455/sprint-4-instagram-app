import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../services/user.service';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { imgList } from '../../data/images/importImages';
import UserModal from '../search-cmps/userModal.jsx';
import AddPost from './addPost';
import {
  faComment,
  faSquarePlus,
  faHeart,
  faCompass
} from '@fortawesome/free-regular-svg-icons';

const NavBar = () => {
  const userInfo = JSON.parse(sessionStorage.getItem('user'));
  const loadingStatus = useSelector(state => state.user.loadingStatus);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const logoutHandler = () => {
    try {
      dispatch(userService.logout());
    } catch (e) {
      console.log(e);
    }
  }

  const handleSearch = debounce((text) => {
    if (!text.length) return setUsers([]);
    console.log(text);
    dispatch(userService.query({ searchValue: text })).then((returnedUsers) => {
      console.log(users)
      setUsers(returnedUsers.payload);
    });
  });

  function debounce(cb, delay = 700) {
    let timeout;
    return (...args) => {
      clearInterval(timeout);
      timeout = setTimeout(() => {
        cb(...args)
      }, delay)

    }
  }

  const loader = () => { return <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> }

  return (
    <nav className='NavBar__Main'>
      <div className="NavBar__Spacer"></div>
      <div className="NavBar__Container">
        <div className="NavBar__InnerContainer">
          <div className="NavBar__Logo">

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
          </div>
          <div className="NavBar__SearchBar">
            <div className="NavBar__Input">

              <input type="text" placeholder="Search" onChange={(event) => { handleSearch(event.target.value) }} />

              {loadingStatus === "loading" && loader()}
            </div>
            {users && users.length > 0 && <div className="NavBar__Search__Suggestions__Container">
              <div className="NavBar__Search__Suggestions">
                <div className="NavBar__Search__Suggestions__UpArrow"></div>
                <div className="NavBar__Suggestions">
                  <div className="NavBar__Suggestions__Container">
                    {users && users.map((user) => <UserModal key={user._id} user={user} />)}
                  </div>

                </div>
              </div>
            </div>}

          </div>
          <div className="NavBar__Actions__Container">
            <div className="NavBar_Actions">
              <a href='/'>
                Home
              </a>
              <button>
                <FontAwesomeIcon
                  icon={faComment}
                  className="svg"
                />
              </button>
              <button> <FontAwesomeIcon
                icon={faSquarePlus}
                className="svg"
                onClick={() => setIsOpen(true)}
              />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faCompass}
                  className="svg"
                />
              </button>
              <button>  <FontAwesomeIcon
                icon={faHeart}
                className="svg"
              /></button>

              <button className='NavBar__PofilePic'><img src={userInfo.profilePic} alt="" /></button>

              <button onClick={logoutHandler}>Logout</button>


            </div>
          </div>
        </div>

      </div>
      <AddPost isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default NavBar;
