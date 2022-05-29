import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faBookmark,
  faHeart,
  faComment,
  faPaperPlane,
} from '@fortawesome/free-regular-svg-icons';
import { postsActions } from '../../store/posts';



const PostActions = (props) => {
  const { post } = props;
  const dispatch = useDispatch();


  const likeHandler = () => {
    dispatch(
      postsActions.addLike({
        postId: post._id,
        likeInfo: {
          _id: 5,
          fullname: 'Dvir Yomtovian',
          imgUrl: 'http://some-img',
        },
      })
    );
  };

  return (
    <div className='popup-actions-post-info'>
      <div className="main-actions">
        <FontAwesomeIcon
          icon={faHeart}
          onClick={likeHandler}
          className="svg"
        />
        <FontAwesomeIcon icon={faComment} className="svg" />
        <FontAwesomeIcon icon={faPaperPlane} className="svg" />
      </div>

      <FontAwesomeIcon icon={faBookmark} className="svg" />
    </div>
  );
};

export default PostActions;
