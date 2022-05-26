const NavBar = () => {
  return (
    <div className="nav-borders">
      <nav className="nav-container">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png" />
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search"/>
        </div>
        <div className="nav-actions">actions</div>
      </nav>
    </div>
  );
};

export default NavBar;
