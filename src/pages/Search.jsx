import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { userService } from "../services/user.service";
import UserModal from "../cmps/search-cmps/userModal";
import NavBar from "../cmps/NavBar";
const Search = (props) => {
  const dispatch = useDispatch();
  const { searchValue } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(userService.query({ searchValue: searchValue })).then((returnedUsers) => {
      setUsers(returnedUsers.payload);
    });
  }, []);


  return (
    <div className="Search__page">
      <NavBar />
      <div className="Search__mainContainer">
        <div className="Search__Params">
          <div className="Serach__Params__Txt">
            <h3>{searchValue}</h3>
          </div>
        </div>
        <div className="Search__Users">

          {users && users.map((user) => <UserModal key={user._id} user={user} />)}
        </div>

      </div>
    </div>
  )
}

export default Search;