import React from "react";


const UserModal = (props) => {

  const { user } = props
  return (
    <a href={`/${user.userName}`}>
      <div className="UserModal__Container">
        <div className="UserModal__ProfilePic__Container">
          <div className="UserModal__ProfilePic">
            <img src={props.user.profilePic} />

          </div>
        </div>
        <div className="UserModal__Info">

          <h1>{user.userName}</h1>
          <h3>{props.user.bio}</h3>
        </div>

      </div>

    </a>
  )
}


export default UserModal;