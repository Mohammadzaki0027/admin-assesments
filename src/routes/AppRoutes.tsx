import { Routes, Route, Navigate } from 'react-router-dom';
import  LoginForm from '../Pages/Login';


const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginForm />} />
     
    </Routes>
  );
};

export default AppRoutes;
