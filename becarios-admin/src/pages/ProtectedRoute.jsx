import { Navigate, useNavigate } from 'react-router-dom';
import { UserAuth } from '../hooks/useAuthContext';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
