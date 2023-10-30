import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import ReactLoading from "react-loading";
const PrivateRouter = ({ allowedRoles }) => {
  const { auth } = useAuth();

  const accJWT = window.localStorage.getItem("accessToken");

  const location = useLocation();

  return auth?.isLoggedIn === false && accJWT === null ? (
    <Navigate to={"/login"} state={{ from: location }} replace />
  ) : auth?.role?.find((role) => allowedRoles?.includes(role)) && accJWT ? (
    <Outlet />
  ) : auth?.isLoggedIn && accJWT ? (
    <Navigate to={"unauthorization"} state={{ from: location }} replace />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ReactLoading
        type={"spinningBubbles"}
        color={"#03fc4e"}
        height={100}
        width={100}
      />{" "}
      <span style={{ marginTop: 15 }}>loading</span>
    </div>
  );
};

export default PrivateRouter;
