import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../homePage/HomePage";
import RegisterPage from "../loginPage/RegisterPage";
import LoginPage from "../loginPage/LoginPage";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Main Layout wrapper for all pages */}
      <Route element={<Layout />}>
        {/* Redirect root path / to /Home */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
        
        {/* Child Pages */}
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage />} />

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;