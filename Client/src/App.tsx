import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserInfo from "./pages/Dashboard/UserInfo";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles/main.scss";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  let [loggedIn, setLoggedIn] = useState(false);

  const ProtectedRoute = ({ children }: any) => {
    if (!loggedIn) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const Layout = () => {
    return (
      <div className="DashBoardContainer">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Navbar />
          <Outlet />
        </div>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/user/:id",
          element: <UserInfo />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
