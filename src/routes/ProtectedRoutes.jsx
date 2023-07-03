import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  // Retrieve the token from the sessionStorage
  const token = JSON.parse(sessionStorage.getItem('token'));

  // Check if the token exists
  // If the token exists, render the children components
  // If the token doesn't exist, navigate to the '/login' route
  return token ? children : <Navigate to='/login' />;
};
