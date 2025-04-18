import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/tms/Dashboard";
import Transactions from "./pages/tms/Transactions";
import Terminals from "./pages/tms/Terminals";
import Requests from "./pages/tms/Requests";
import TerminalDetails from "./pages/tms/TerminalDetails";
import RequestDetails from "./pages/tms/RequestDetails";
import Profile from "./pages/tms/Profile";
import ReduxProvider from "./provider/Reduxprovider";
import QueryProvider from "./provider/QueryProvider";
import PrivateRoute from "./protected/PrivateRoute";

function AppRoutes() {
  return (
    <>
      <ReduxProvider>
        <QueryProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/register" element={<Register />} />

            {/* private routes */}
            <Route element={<PrivateRoute />}>
              {/* dashboard routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/terminals" element={<Terminals />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/profile" element={<Profile />} />

              {/* Dynamic route for Terminal Details */}
              <Route path="/terminals/:id" element={<TerminalDetails />} />
              <Route path="/requests/:id" element={<RequestDetails />} />
            </Route>
          </Routes>
        </QueryProvider>
      </ReduxProvider>
    </>
  );
}

export default AppRoutes;
