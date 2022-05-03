import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
// import NotHaveAccess from "../components/layout/NotHaveAccess";
import { parseJwt } from "../utils";
import { logout } from "../store/slices/authSlice";

const RequireAuth = ({ children, privateRoute }) => {
  const { enqueueSnackbar } = useSnackbar();
  const decodedJwt = parseJwt(localStorage.getItem("jwt"));
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, roles, loggedInUser } = useSelector(
    (state) => state.auth
  );
  if (decodedJwt && decodedJwt.exp * 1000 < Date.now()) {
    enqueueSnackbar("Token Expierd: Login Again", { variant: "info" });
    dispatch(logout());
    return <Navigate to="/" replace />;
  }
  if (!isAuthenticated && privateRoute)
    return <Navigate to="/login" state={{ from: location }} replace />;
  if (isAuthenticated && loggedInUser && !loggedInUser.mobile)
    return <Navigate to="/user/mobile/number" replace />;
  if (isAuthenticated && !privateRoute)
    return <Navigate to="/students" replace />;
  const currentPath = location.pathname.split("/")[1];
  switch (currentPath) {
    // case "partner":
    //   return params.partnerId === undefined ||
    //     roles.some(
    //       (role) =>
    //         role.split(":")[0] === "Partner" &&
    //         parseInt(role.split(":")[1], 10) === parseInt(params.partnerId, 10)
    //     ) ? (
    //     <div className="bodyComponent">{children}</div>
    //   ) : (
    //     <div className="bodyComponent">
    //       <NotHaveAccess />
    //     </div>
    //   );
    // case "campus":
    //   return params.campusId === undefined ||
    //     roles.some(
    //       (role) =>
    //         role.split(":")[0] === "T&P" &&
    //         parseInt(role.split(":")[1], 10) === parseInt(params.campusId, 10)
    //     ) ? (
    //     <div className="bodyComponent">{children}</div>
    //   ) : (
    //     <div className="bodyComponent">
    //       <NotHaveAccess />
    //     </div>
    //   );
    default:
      return <div className="bodyComponent">{children}</div>;
  }
};

export default RequireAuth;

RequireAuth.defaultProps = {
  privateRoute: false,
};
