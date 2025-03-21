import "./App.css";
import Layout from "./components/Layout";
import DashboardPage from "./pages/dashboard.page";
import LoginPage from "./pages/login.page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile.page";
import PrivateRouteWrapper from "./auth-wrappers/PrivateRouteWrapper";
import SettingPage from "./pages/setting.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={<PrivateRouteWrapper component={<Layout />} />}
        >
          <Route path="/dashboard" index element={<DashboardPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/settings" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
