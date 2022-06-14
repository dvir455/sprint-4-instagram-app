import { useDispatch } from 'react-redux';
import { postsActions } from '../../store/posts';
import { postsService } from '../../services/posts.service';
import { utilService } from '../../services/util.services';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons';

const PostAddComment = (props) => {
  const [commentTxt, setCommentTxt] = useState('');
  const dispatch = useDispatch();
  const { post } = props;

  const commentHandler = (event, txt) => {
    event.preventDefault();
    if (commentTxt.length === 0) return;
   
    dispatch(postsService.addComment({
      postId: post._id,
      commentTxt,
      commentId: utilService.makeid(),
    }));
    // dispatch(postsService.addComment({
    //   postId: post._id,
    //   comment: {
    //     id: utilService.makeid(),
    //     by: {
    //       _id: utilService.makeid(),
    //       fullname: 'Dvir Yomtovian',
    //       imgUrl: 'http://some-img',
    //     },
    //     txt: commentTxt,
    //   }
    // }));
    setCommentTxt('');
  };

  return (
    <form className="PostAddComment__container" onSubmit={commentHandler}>
      {/* //TODO - Make a popup emoji list */}
      <FontAwesomeIcon icon={faFaceSmile} className="svg" />
      <input
        type="text"
        value={commentTxt}
        onChange={(event) => {
          setCommentTxt(event.target.value);
          console.log(event.target.value);
        }}
        placeholder="Add a comment..."
      />
      <button
        className={
          commentTxt.length > 0
            ? 'PostAddComment__postBtnActive'
            : 'PostAddComment__postBtnInactive'
        }
      >
        Post
      </button>
    </form>
  );
};

export default PostAddComment;
