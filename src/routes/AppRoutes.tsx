// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../Pages/Login';
import Dashboard from '../Pages/Dashboard';
import Article from '../Pages/Article';

import DealerShip from '../Pages/DealerShip';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<LoginForm />} />

      {/* Protected Routes with Layout */}
   
        <Route path='/dealerShip' element={<DealerShip/>}/>
        <Route path="/" element={<Dashboard />} />
        <Route path="/article" element={<Article />} />

    </Routes>
  );
};

export default AppRoutes;
