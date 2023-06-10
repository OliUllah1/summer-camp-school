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
import ErrorPage from "../ErrorPage/ErrorPage";
import AddClass from "../Pages/Dashboards/InstructorDashboard/AddClass/AddClass";
import InstructorClasses from "../Pages/Dashboards/InstructorDashboard/InstructorClasses/InstructorClasses";
import Instructors from "../Pages/Home/Instructors/Instructors";
import Classes from "../Pages/Home/Classes/Classes";
import Payment from "../Pages/Dashboards/StudentDashboard/Payment/Payment";
import ManageClasses from "../Pages/Dashboards/AdminDashboard/ManageClasses/ManageClasses";
import ManageUsers from "../Pages/Dashboards/AdminDashboard/ManageUsers/ManageUsers";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/instructors',
          element:<Instructors></Instructors>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
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
        path:'payment/:id',
        element:<Payment></Payment>,
        loader:({params})=>fetch(`http://localhost:5000/classes/${params.id.substring(1)}`)
      },
      {
        path:'paymenthistory',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      },
      {
        path:'instructorclasses',
        element:<InstructorClasses></InstructorClasses>
      },
      {
        path:'manageclasses',
        element:<ManageClasses></ManageClasses>,
        loader:()=>fetch('http://localhost:5000/allclasses')
      },
      {
        path:'manageusers',
        element:<ManageUsers></ManageUsers>
      }
      ]
    }
  ]);



export default router;
