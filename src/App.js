import './App.css';
import NavBar from './cmps/NavBar';
import Feed from './pages/Feed';
import Login from './pages/Login';
import PostPopup from './cmps/feed-cmps/PostPopup';
function App() {
  const logiz = true;

  return (
    <div className="App">
      {logiz && <NavBar />}
      {logiz ? <Feed /> : <Login />}
      {/* <PostPopup /> */}
    </div>
  );
}

export default App;
