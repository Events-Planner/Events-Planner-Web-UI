import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import LandingPage from "../landingPage/LandingPage"; // Add this import
import HomePage from "../homePage/HomePage";
import RegisterPage from "../loginPage/RegisterPage";
import LoginPage from "../loginPage/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Root URL opens the Landing Page with Register/Login actions */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Post-login / Dashboard route */}
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;