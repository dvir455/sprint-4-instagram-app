import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import PostActions from '../general-cmps/PostActions';
import PostAddComment from '../general-cmps/PostAddComment';
import CommentsCmp from '../general-cmps/CommentsCmp';
import { useHistory } from 'react-router-dom';
import React, { useRef, useEffect } from 'react';
import { httpService } from '../../services/http.service';

const POSTS_URL = 'http://localhost:3030/api/posts';

const PostPopup = () => {
  const { postId } = useParams();
  const [post, setPost] = React.useState(null);

  const fetchPost = async () => {
    const URL = `${POSTS_URL}/${postId}`
    const response = await httpService.get(URL);
    setPost(response);
  }

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const history = useHistory();

  const commentInputRef = useRef(null);

  const routeChange = () => {
    const path = `/`;
    history.push(path);
  };

  return (
    <React.Fragment>
      {post ? <section className="post-popup-container">
        <div className="blacked-background">
          <button onClick={routeChange}>✕</button>
        </div>
        <article className="post-popup">
          <div className="popup-image-container">
            <img className="popup-img" src={post.imgUrl} />
          </div>
          <div className="popup-info-container">
            <div className="popup-user-info">
              <img className="user-profile-pic" src={post.by.imgUrl} alt="" />
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
              <PostActions commentInputRef={commentInputRef} post={post} />
              <p className="post-likes">{post.likedBy.length} likes</p>
              <div className="post-date">{moment(post.createdAt).fromNow()}</div>
            </div>
            <div className="popup-add-comment">
              <PostAddComment commentInputRef={commentInputRef} post={post} />
            </div>
          </div>
        </article>
      </section> : <div>Loading...</div>}
    </React.Fragment>
  );
};

export default PostPopup;
