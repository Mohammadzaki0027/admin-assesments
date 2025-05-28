
import type { JSX } from '@emotion/react/jsx-runtime';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = !!localStorage.getItem('acesstoken')

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
