import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/Layout";
import Dashboard from "./scenes/Dashboard";
import { PrivateRoutes } from "./utils/PrivateRoute";
import { LoggedInPrivateRoute } from "./utils/LoggedInPrivateRoute";
import Login from "./scenes/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route element={<LoggedInPrivateRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
