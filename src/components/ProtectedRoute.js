import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../pages/Auth/authContext';

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/register" replace />;
  }

  return children;
}

export default ProtectedRoute;
