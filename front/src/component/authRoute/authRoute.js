import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../authContext/authContext";

const AuthRoute = () => {
  const user = useAuth();
  if (!user.token) return <Link to="/" />;
  return <Outlet />;
};

export default AuthRoute;