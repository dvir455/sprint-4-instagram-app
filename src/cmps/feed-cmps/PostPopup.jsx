import { imgList } from '../../data/images/importImages';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import PostActions from '../general-cmps/PostActions';
import PostAddComment from '../general-cmps/PostAddComment';
import CommentsCmp from '../general-cmps/CommentsCmp';
import { useHistory } from 'react-router-dom';

const PostPopup = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const post = posts[postId];
  const history = useHistory();

  const routeChange = () => {
    const path = `/`;
    history.push(path);
  };

  return (
    <section className="post-popup-container">
      <div className="blacked-background">
        <button onClick={routeChange}>✕</button>
      </div>
      <article className="post-popup">
        <div className="popup-image-container">
          <img className="popup-img" src={imgList[post.imgUrl]} />
        </div>
        <div className="popup-info-container">
          <div className="popup-user-info">
            <img className="user-profile-pic" src={imgList.by} alt="" />
            <a href="">{post.by.fullname}</a>
            <p>{post.loc.name}</p>
          </div>
          <div className="popup-comment-section">
            <div className="publisher-txt">
              <span>{post.by.fullname}</span>
              {post.txt}
            </div>
            <div className="popup-comments">
              {/* {post.comments.map((comment) => (
                <div className="comment-container" key={comment.id}>
                  <p>
                    <span className="comment-username">
                      {comment.by.fullname}{' '}
                    </span>
                    <span className="comment-txt">{comment.txt}</span>
                  </p>
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="comment-delete"
                    onClick={() => {
                      // removeCommentHandler(post._id, comment.id);
                    }}
                  />
                </div>
              ))} */}
              <CommentsCmp post={post} />
            </div>
          </div>
          <div className="popup-actions">
            <PostActions post={post} />
            <p className="post-likes">{post.likedBy.length} likes</p>
            <div className="post-date">{moment(post.createdAt).fromNow()}</div>
          </div>
          <div className="popup-add-comment">
            <PostAddComment post={post} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PostPopup;
