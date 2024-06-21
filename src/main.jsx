import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Index from './pages/Index';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import UserRoute from './protectedRoutes/UserRoute';
import UserLayout from './layouts/UserLayout';
import OwnerLayout from './layouts/OwnerLayout';


const router = createBrowserRouter([
  {
    element: <UserLayout />,
    children: [
      {
        path: "/",
        element:<Index />,
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <SigninPage />
      }
    ]
  },
  {
    element: <OwnerLayout />,
    children: [
      {
        
      }
    ]
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={1000} position="bottom-left" />
  </React.StrictMode>
)
