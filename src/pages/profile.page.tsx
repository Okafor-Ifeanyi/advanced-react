import IntroComponent from '../components/dashboard.component';
import Navbar from '../components/nav.component';

export default function ProfilePage() {

  return (
    <div className="main-screen">
        <Navbar />
        <IntroComponent intro="Profile" />
    </div>
  );
}