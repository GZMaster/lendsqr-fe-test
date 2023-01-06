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
let adminUser = true;

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
const ProtectedRoute = ({ children }: any) => {
  if (!adminUser) {
    return <Navigate to="/login" />;
  }
  return children;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />,
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
    element: <Login />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
