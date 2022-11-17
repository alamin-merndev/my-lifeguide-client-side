import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Button, Loader } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader active inline="centered" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
