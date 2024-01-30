import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../hooks/useAuthContext';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
  const { user } = UserAuth();
  const navigate = useNavigate();

  useEffect(function () {
    if (!user) navigate('/'), [user, navigate];
  });

  return user ? children : null;
}

export default ProtectedRoute;
