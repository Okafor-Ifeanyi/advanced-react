const Navbar = () => {
  return (
    <div className="nav-bar">
        <div className="profile">
          <img src="" alt="" />
          <div className="nav-profile">
            <h3>John Doe</h3>
            <p>Admin</p>
          </div>
        </div>
        <nav className="navList">
            <ul>
                <button>Dashboard</button>
                <button>profile</button>
                <button>settings</button>
            </ul>
        </nav>
        <div>
          <button className="logout">logout</button>
        </div>
    </div>
   
  );
}

export default Navbar;