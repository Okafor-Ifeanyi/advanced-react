import { useState } from 'react';
import { useAuthContext } from '../context/auth.context';

export default function LoginPage() {
  const { setIsLoggedIn, setUser } = useAuthContext();
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && role) {
      setIsLoggedIn(true);
      setUser({ email, role });
    //   Navigate('/dashboard');
    }
  };

  return (
    <div className="loginBox">
      <form onSubmit={handleSubmit} className="formBox">
        <h2 className="login-text">Login</h2>
        <div className="labelInputBox">
          <label className="">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=""
            required
          />
        </div>
        <div className="labelInputBox">
          <label className="">Role</label>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className=""
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}