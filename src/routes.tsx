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

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/register" element={<Register />} />

        {/* dashboard routes */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/terminals" element={<Terminals />} />
        <Route path="/requests" element={<Requests />} />

        {/* Dynamic route for Terminal Details */}
        <Route path="/terminals/:id" element={<TerminalDetails />} />
        <Route path="/requests/:id" element={<RequestDetails />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
