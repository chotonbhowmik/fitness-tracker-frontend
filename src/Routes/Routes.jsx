import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../Layout/Dashboard";
import BecomeTrainer from "../pages/BecomeTrainer/BecomeTrainer";
import AllTrainer from "../pages/AllTrainer/AllTrainer";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import Booking from "../pages/Booking/Booking";
import AllNewsLetter from "../pages/Admin/AllNewsLetter/AllNewsLetter";
import UserHome from "../pages/Admin/UserHome/UserHome";
import AdminDashboardTrainer from "../pages/Admin/AdminDashboardTrainer/AdminDashboardTrainer";
import AllTrainers from "../pages/Admin/AllTrainers/AllTrainers";
import AdminTrainerDetails from "../pages/Admin/AdminTrainerDetails/AdminTrainerDetails";
import AddClass from "../pages/Admin/AddClass/AddClass";
import AllClass from "../pages/AllClass/AllClass";
import Forum from "../pages/Forum/Forum";
import AddForum from "../pages/AddForum/AddForum";
import PrivateRoute from "./PrivateRoute";
// import UserHome from "../components/UserHome/UserHome"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/become-trainer",
        element: (
          <PrivateRoute>
            <BecomeTrainer></BecomeTrainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-trainer",
        element: <AllTrainer></AllTrainer>,
      },
      {
        path: "/details/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
      },
      {
        path: "/all-class",
        element: <AllClass></AllClass>,
      },
      {
        path: "/forum",
        element: <Forum></Forum>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "all-newsLetter",
        element: <AllNewsLetter></AllNewsLetter>,
      },
      {
        path: "all-applied-trainer",
        element: <AdminDashboardTrainer></AdminDashboardTrainer>,
      },
      {
        path: "all-trainers",
        element: <AllTrainers></AllTrainers>,
      },
      {
        path: "trainer-details/:id",
        element: <AdminTrainerDetails></AdminTrainerDetails>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "add-forum",
        element: <AddForum></AddForum>,
      },
    ],
  },
]);
