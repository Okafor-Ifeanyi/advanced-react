import { useState } from "react";
import { useAuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const { setIsLoggedIn, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [role, setRole] = useState("admin");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && role) {
      console.log(name, role, "login");

      setIsLoggedIn(true);
      setUser({ name, role });
      navigate("/dashboard");
    }
  };

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit} className="formBox">
        <h2 className="login-text">Login</h2>
        <div className="labelInputBox">
          <label className="">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className=""
            required
          />
        </div>
        <div className="labelInputBox">
          <label className="">Role</label>
          <select
            value={role}
            defaultValue={"admin"}
            onChange={handleSelectChange}
            className="labelInputBox"
            required
          >
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}
