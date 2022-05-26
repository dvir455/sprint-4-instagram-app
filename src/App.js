import './App.css';
import NavBar from './cmps/NavBar';
import Feed from './pages/Feed';
import Login from './pages/Login';
function App() {
  const logiz = true;



  return (
    <div className="App">
      {logiz && <NavBar />}
      {logiz?<Feed/>:<Login/>}
    </div>
  );
}

export default App;
