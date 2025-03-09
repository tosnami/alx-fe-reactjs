import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Simple authentication check (for demonstration)
const ProtectedRoute = () => {
  const isAuthenticated = false;  // Change to simulate authentication state
  
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
