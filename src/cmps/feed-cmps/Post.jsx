import { useState } from 'react';
import { imgList } from '../../data/images/importImages';
import { useDispatch, useSelector } from 'react-redux';
import { utilService } from '../../services/util.services';
import moment from 'moment';
import PostActions from '../general-cmps/PostActions';
import CommentsCmp from '../general-cmps/CommentsCmp';
import PostAddComment from '../general-cmps/PostAddComment';

const Post = (props) => {
  const { post } = props;
  const imgUrl = imgList[post.imgUrl];

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
      <div>
        <PostActions post={post} />
      </div>
      <div className="post-info">
        <div className="post-likes">{post.likedBy.length} likes</div>
        <div className="post-txt">
          <span>{post.by.fullname}</span> {post.txt}
        </div>
        <div className="post-comments">
          <CommentsCmp post={post} />
        </div>
        <div className="post-date">{moment(post.createdAt).fromNow()}</div>
        <div className="comment-add-section">
          <PostAddComment post={post} />
        </div>
      </div>
    </article>
  );
};



export default Post;
