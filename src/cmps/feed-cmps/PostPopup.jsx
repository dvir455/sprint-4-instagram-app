import { imgList } from '../../data/images/importImages';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import PostActions from '../general-cmps/PostActions';
import PostAddComment from '../general-cmps/PostAddComment';
import CommentsCmp from '../general-cmps/CommentsCmp';
import { useHistory } from 'react-router-dom';
import React from 'react';

const PostPopup = () => {
  const { posts } = useSelector((state) => state.posts);
  const { postId } = useParams();
  const post = posts[postId];
  const history = useHistory();

  const routeChange = () => {
    const path = `/`;
    history.push(path);
  };

  return (
    <React.Fragment>
      {post && <section className="post-popup-container">
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
              <div className="post-txt">
                <span>{post.by.fullname}</span>
                {post.txt}
              </div>
              <div className="post-comments">

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
      </section>}
    </React.Fragment>
  );
};

export default PostPopup;
