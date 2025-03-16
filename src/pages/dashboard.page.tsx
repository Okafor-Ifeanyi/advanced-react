// import { useState } from 'react';
// import { useAuthContext } from '../context/auth.context';
import IntroComponent from '../components/dashboard.component';
import Navbar from '../components/nav.component';

export default function DashboardPage() {
//   const { setIsLoggedIn, setUser } = useAuthContext();
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (email && role) {
//       setIsLoggedIn(true);
//       setUser({ email, role });
//     //   Navigate('/dashboard');
//     }
//   };

  return (
    <div className="main-screen">
        <Navbar />
        <IntroComponent intro="Dashboard" />
    </div>
  );
}