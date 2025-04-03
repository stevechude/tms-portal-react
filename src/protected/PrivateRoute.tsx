import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const PrivateRoute = () => {
  const token = cookies.get("app-tok"); // Check if token exists

  return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
