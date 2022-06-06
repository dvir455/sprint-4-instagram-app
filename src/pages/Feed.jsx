import Post from '../cmps/feed-cmps/Post';
import { useSelector, useDispatch } from 'react-redux';
import AccountSuggestions from '../cmps/feed-cmps/AccountSuggestions';
import React, { useEffect } from 'react';
import { postsService } from '../services/posts.service';

const Feed = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.posts.loadingStatus);

  useEffect(() => {
    dispatch(postsService.query());
  }, []);
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="feed-container">
      {loadingStatus === 'loading' && <div className="loading"></div>}
      {loadingStatus === 'success' && <div className="Post__mainFeed">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>}
      {loadingStatus === 'failure' && <div className="message">
        <h1>500</h1>
        <h3>Server Error - Failed to load posts</h3>
        <h2>It's not you, it's me.</h2>
        <h2>Please try again later</h2>
      </div>
      }
    </div>
  )
};

export default Feed;
