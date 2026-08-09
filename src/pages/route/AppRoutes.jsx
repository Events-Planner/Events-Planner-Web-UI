import { Routes, Route } from 'react-router-dom';
import HomePage from '../homePage/HomePage';
import LoginPage from '../loginPage/LoginPage';
import RegisterPage from '../loginPage/RegisterPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;