import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  const role = user && user.role;
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="nav-bar">
      <div className="profile">
        <img src="https://github.com/user-attachments/assets/0df1b3bc-ccab-4aa2-bb22-676a73e067a3" alt="pfp" />
        <div className="nav-profile">
          <h3>{user && user.name}</h3>
          <p>{user && user.role}</p>
        </div>
      </div>
      <nav className="navList">
        <ul>
          <button>
            <Link to="/dashboard">Dashboard</Link>
          </button>
          <button>
            <Link to="/dashboard/profile">profile</Link>
          </button>
          {role === "admin" && (
            <button>
              <Link to="/dashboard/settings">settings</Link>
            </button>
          )}
        </ul>
      </nav>
      <div>
        <button className="logout" onClick={logoutUser}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
