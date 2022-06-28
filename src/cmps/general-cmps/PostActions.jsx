import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { postsService } from '../../services/posts.service';

import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';

const PostActions = (props) => {
  const { post, commentInputRef } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const { user } = useSelector((state) => state.user);


  const checkIfLiked = () => {
    if (!post || post.likedBy.length === 0) return
    const liked = post.likedBy.find((like) => {
      return like._id === user._id
    });
    return liked
  }

  //Todo set isLiked to true or false based on user liked
  const [isLiked, setIsLiked] = useState(checkIfLiked);



  const routeChange = () => {
    console.log(commentInputRef);
    if (location.state?.background) return commentInputRef.current?.focus();
    const path = `/p/${post._id}`;
    history.push(path, { background: location });
  };

  const likeHandler = () => {
    dispatch(postsService.likePost({
      postId: post._id,
      // setIsLiked,
      // isLiked
    })).then(() => {

      setIsLiked(!isLiked);
    });
  };

  const likeStyle = {
    color: '#ed4956',
  };

  return (
    <React.Fragment>
      {post && <div className="popup-actions-post-info">
        <div className="main-actions">
          <FontAwesomeIcon
            icon={isLiked ? faHeartSolid : faHeart}
            onClick={likeHandler}
            className="svg --fa-style"
            style={isLiked ? likeStyle : ''}
          />
          <FontAwesomeIcon
            icon={faComment}
            className="svg"
            onClick={routeChange}
          />
          <FontAwesomeIcon icon={faPaperPlane} className="svg" />
        </div>

        <FontAwesomeIcon icon={faBookmark} className="svg" />
      </div>}
    </React.Fragment>
  );
};

export default PostActions;
