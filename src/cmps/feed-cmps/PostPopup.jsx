import { imgList } from '../../data/images/importImages';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import PostActions from '../general-cmps/PostActions';
import PostAddComment from '../general-cmps/PostAddComment';
import CommentsCmp from '../general-cmps/CommentsCmp';

const PostPopup = (props) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  console.log(posts[1]);
  return (
    <section className="post-popup-container">
      <div className="blacked-background"></div>
      <article className="post-popup">
        <div className="popup-image-container">
          <img className="popup-img" src={imgList[posts[1].imgUrl]} />
        </div>
        <div className="popup-info-container">
          <div className="popup-user-info">
            <img className="user-profile-pic" src={imgList.by} alt="" />
            <a href="">{posts[1].by.fullname}</a>
            <p>{posts[1].loc.name}</p>
          </div>
          <div className="popup-comment-section">
            <div className="publisher-txt">
              <span>{posts[1].by.fullname}</span>
              {posts[1].txt}
            </div>
            <div className="popup-comments">
              {/* {posts[1].comments.map((comment) => (
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
              <CommentsCmp post={posts[1]} />
            </div>
          </div>
          <div className="popup-actions">
            <PostActions post={posts[1]} />
            <p className="post-likes">{posts[1].likedBy.length} likes</p>
            <div className="post-date">
              {moment(posts[1].createdAt).fromNow()}
            </div>
          </div>
          <div className="popup-add-comment">
            <PostAddComment post={posts[1]} />
          </div>
        </div>
      </article>
    </section>
  );
};

export default PostPopup;
