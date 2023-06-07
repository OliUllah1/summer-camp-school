import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import router from './router/router';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-2 lg:px-10'>
      <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  </React.StrictMode>,
)
