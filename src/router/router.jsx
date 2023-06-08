import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Banner from "../Pages/Home/Banner/Banner";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Dashboard from "../Pages/Dashboards/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/banner',
          element:<Banner></Banner>
        }
      ]
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:'dashboard',
      element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>
    }
  ]);



export default router;
