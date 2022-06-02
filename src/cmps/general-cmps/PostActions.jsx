import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postsService } from '../../services/posts.service';

import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { postsActions } from '../../store/posts';

const PostActions = (props) => {
  const { post, isLiked, setIsLiked } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const routeChange = () => {
    const path = `/p/${post._id}`;
    history.push(path);
  };

  const likeHandler = () => {
    // dispatch(
    //   postsActions.addLike({
    //     postId: post._id,
    //     likeInfo: {
    //       _id: 5,
    //       fullname: 'Dvir Yomtovian',
    //       imgUrl: 'http://some-img',
    //     },
    //   })
    // );
    dispatch(postsService.likePost({
      userId: 'ddd',
      postId: post._id,
      likeInfo: {
        _id: 'ddd',
        fullname: 'Dvir Yomtovian',
        imgUrl: 'http://some-img',
      },
    }));
      setIsLiked(!isLiked);
  };

  const likeStyle = {
    color: '#ed4956',
  };

  return (
    <div className="popup-actions-post-info">
      <div className="main-actions">
        <FontAwesomeIcon
          icon={isLiked ? faHeartSolid : faHeart}
          onClick={likeHandler}
          className="svg --fa-style"
          style={isLiked ? likeStyle : ''}
        />
        <FontAwesomeIcon
          icon={faComment}
          onClick={routeChange}
          className="svg"
        />
        <FontAwesomeIcon icon={faPaperPlane} className="svg" />
      </div>

      <FontAwesomeIcon icon={faBookmark} className="svg" />
    </div>
  );
};

export default PostActions;
