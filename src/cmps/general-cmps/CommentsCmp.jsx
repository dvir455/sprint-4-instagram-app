import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { postsService } from '../../services/posts.service';
const CommentsCmp = (props) => {
  const { post } = props;
  const dispatch = useDispatch();

  const removeCommentHandler = (postId, commentId) => {
    dispatch(postsService.deleteComment({ postId, commentId }));
  };


  return (
    <React.Fragment>
      {post.comments.map((comment) => (
        <div className="comment-container" key={comment.id}>
          <p>
            <span className="comment-username">{comment.by.fullname} </span>
            <span className="comment-txt">{comment.txt}</span>
          </p>
          <FontAwesomeIcon
            icon={faTrashCan}
            className="comment-delete"
            onClick={() => {
              removeCommentHandler(post._id, comment.id);
            }}
          />
        </div>
      ))}
    </React.Fragment>
  );
};

export default CommentsCmp;
