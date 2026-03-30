import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ portopio: Portopio, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if token exists
  return isAuthenticated ? <Portopio {...rest} /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;
