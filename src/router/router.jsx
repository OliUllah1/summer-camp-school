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
import UpdateClass from "../Pages/Dashboards/InstructorDashboard/UpdateClass/UpdateClass";
import AdminRouter from "./PrivateRouter/AdminRouter";
import InstructorRouter from "./PrivateRouter/InstructorRouter";
import About from "../Pages/Home/About/About";
import Blog from "../Pages/Home/Blog/Blog";


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
          path:'/about',
          element:<About></About>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
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
        element:<PrivateRouter><MyClasses></MyClasses></PrivateRouter>
      },
      {
        path:'enrolled',
        element:<PrivateRouter><EnrolledClasses></EnrolledClasses></PrivateRouter>
      },
      {
        path:':id',
        element:<PrivateRouter><Payment></Payment></PrivateRouter>
      },
      {
        path:'paymenthistory',
        element:<PrivateRouter><PaymentHistory></PaymentHistory></PrivateRouter>
      },
      {
        path:'addclass',
        element:<InstructorRouter><AddClass></AddClass></InstructorRouter>
      },
      {
        path:'instructorclasses',
        element:<InstructorRouter><InstructorClasses></InstructorClasses></InstructorRouter>
      },
      {
        path:'manageclasses',
        element:<AdminRouter><ManageClasses></ManageClasses></AdminRouter>
      },
      {
        path:'manageusers',
        element:<AdminRouter><ManageUsers></ManageUsers></AdminRouter>
      },
      {
        path:'updateclass/:id',
        element:<UpdateClass></UpdateClass>,
        loader:({params})=>fetch(`https://summer-camp-school-server-mu.vercel.app/classes/${params.id}`)
      }
      ]
    }
  ]);



export default router;
