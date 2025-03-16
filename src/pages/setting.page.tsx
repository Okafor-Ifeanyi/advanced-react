import { useNavigate } from "react-router-dom";
import IntroComponent from "../components/dashboard.component";
import { useAuthContext } from "../context/auth.context";
import { useEffect } from "react";

export default function SettingPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="main-screen">
      <IntroComponent intro="Setings" />
    </div>
  );
}
