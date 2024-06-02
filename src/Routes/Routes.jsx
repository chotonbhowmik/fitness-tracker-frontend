import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../Layout/Dashboard";
import BecomeTrainer from "../pages/BecomeTrainer/BecomeTrainer";
import AllTrainer from "../pages/AllTrainer/AllTrainer";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
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
         element: <BecomeTrainer></BecomeTrainer>,
       },
       {
         path: "/all-trainer",
         element: <AllTrainer></AllTrainer>,
       },
       {
         path: "/details/:id",
         element: <TrainerDetails></TrainerDetails>,
       },
     ],
   },
   {
     path: "dashboard",
     element: <Dashboard></Dashboard>,
     children: [
       // normal user routes
       {
         path: "userHome",
         element: <user></user>,
       },
     ],
   },
 ]);