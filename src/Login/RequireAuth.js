import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate, Navigate, useLocation } from "react-router-dom";
import Loading from "../Shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const location = useLocation();
  if(loading){
    return <div className="my-40 container"><Loading></Loading></div>
}
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  } else return children;
};
export default RequireAuth;
