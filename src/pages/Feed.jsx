import Post from '../cmps/feed-cmps/Post';
import { useSelector, useDispatch } from 'react-redux';
import AccountSuggestions from '../cmps/feed-cmps/AccountSuggestions';

const Feed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  return (
    <div className="feed-container">
      <div className="main-feed">
        {posts.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
      <AccountSuggestions />
    </div>
  );
};

export default Feed;
