import IntroComponent from "../components/dashboard.component";
import { useAuthContext } from "../context/auth.context";
export default function DashboardPage() {
  const { user } = useAuthContext();
  const role = user && user.role;
  return (
    // <div className="main-screen">
    //   <IntroComponent intro="Dashboard" />
    // </div>
    <>
      {role === "admin" && <IntroComponent intro="Admin" />}
      {role === "editor" && <IntroComponent intro="Editors" />}
      {role === "viewer" && <IntroComponent intro="Viewers" />}
    </>
  );
}
