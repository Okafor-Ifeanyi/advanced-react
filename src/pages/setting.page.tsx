import { useNavigate } from "react-router-dom";
import IntroComponent from "../components/Intro";
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
      <IntroComponent intro="Settings" />
      <h2>You are seeing this page cause you are an Admin. </h2>
      <cite>Enjoy the ambience</cite>
    </div>
  );
}
