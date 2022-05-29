import { useState } from 'react';
import { imgList } from '../../data/images/importImages';
import { useDispatch } from 'react-redux';
import { postsActions } from '../../store/posts';
import { utilService } from '../../services/util.services';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faFaceSmile } from '@fortawesome/free-regular-svg-icons';
import PostActions from '../general-cmps/PostActions';
import CommentsCmp from '../general-cmps/CommentsCmp';

const Post = (props) => {
  const dispatch = useDispatch();
  const { post } = props;
  const imgUrl = imgList[post.imgUrl];

  const [commentTxt, setCommentTxt] = useState('');

  const commentHandler = (event, txt) => {
    event.preventDefault();
    if (commentTxt.length === 0) return;
    dispatch(
      postsActions.addComment({
        postId: post._id,
        comment: {
          id: utilService.makeid(),
          by: {
            _id: utilService.makeid(),
            fullname: 'Dvir Yomtovian',
            imgUrl: 'http://some-img',
          },
          txt: commentTxt,
        },
      })
    );
    setCommentTxt('');
  };

  return (
    <article className="post-container">
      <header>
        <img className="user-profile-pic" src={imgList.by} />
        <div className="header-text-area">
          <h1>{post.by.fullname}</h1>

          {post.loc.name ? (
            <h2 className="post-location">{post.loc.name}</h2>
          ) : (
            ''
          )}
        </div>
      </header>
      <div className="post-img">
        <img src={imgUrl} />
      </div>
      <div className="post-actions">
        <PostActions post={post} />
      </div>
      <div className="post-info">
        <div className="post-likes">{post.likedBy.length} likes</div>
        <div className="post-txt">
          <span>{post.by.fullname}</span> {post.txt}
        </div>
        <div className="post-comments">
          {/* {post.comments.map((comment) => (
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
          ))} */}
          <CommentsCmp post={post} />
        </div>
        <div className="post-date">{moment(post.createdAt).fromNow()}</div>
        <div className="comment-add-section">
          <form className="post-add-comment" onSubmit={commentHandler}>
            <FontAwesomeIcon icon={faFaceSmile} className="svg" />
            <input
              type="text"
              value={commentTxt}
              onChange={(event) => {
                setCommentTxt(event.target.value);
              }}
              placeholder="Add a comment..."
            />
            <button className="comment-post">Post</button>
          </form>
        </div>
      </div>
    </article>
  );
};

export default Post;
