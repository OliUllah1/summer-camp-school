import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import Dashboard from "../Pages/Dashboards/Dashboard/Dashboard";
import MyClasses from "../Pages/Dashboards/StudentDashboard/MyClass/MyClasses";
import EnrolledClasses from "../Pages/Dashboards/StudentDashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboards/StudentDashboard/PaymentHistory/PaymentHistory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
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
      element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
      children:[
      {
        path:'myclasses',
        element:<MyClasses></MyClasses>
      },
      {
        path:'enrolled',
        element:<EnrolledClasses></EnrolledClasses>
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      }
      ]
    }
  ]);



export default router;
