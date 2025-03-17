import IntroComponent from "../components/Intro";
import { useAuthContext } from "../context/auth.context";
export default function DashboardPage() {
  const { user } = useAuthContext();
  const role = user && user.role;
  return (
    // <div className="main-screen">
    //   <IntroComponent intro="Dashboard" />
    // </div>
    <>
      {role === "admin" && <IntroComponent intro="Admin Dashboard" name={user?.name || ""} />}
      {role === "editor" && <IntroComponent intro="Editor Dashboard" name={user?.name || ""} />}
      {role === "viewer" && <IntroComponent intro="Viewer Dashboard" name={user?.name || ""} />}
    </>
  );
}
