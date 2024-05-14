import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Updates from './Components/Updates';
import Login from './Components/Login';
import Reg from './Components/Reg';
import AuthProvider from './Providers/AuthProvider';
import Details from './Components/Details';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './Components/PrivateRoute';
import DetailsInfo from './Components/DetailsInfo';
import NeedVolunteer from './Components/NeedVolunteer';
import AddVolunteerPost from './Components/AddVolunteerPost';
import ManageMyPost from './Components/ManageMyPost';
import BeAVolunteer from './Components/BeAVolunteer';
import UpdatePost from './Components/UpdatePost';
import AnotherPostDetails from './Components/AnotherPostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/update",
        element: <PrivateRoute><Updates></Updates></PrivateRoute>,
      },
      {
        path: "/my-post",
        element: <PrivateRoute><ManageMyPost></ManageMyPost></PrivateRoute>,
      },
      {
        path: "/update-post/:id",
        element: <UpdatePost></UpdatePost>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/reg",
        element: <Reg></Reg>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
      },
      {
        path: '/be-a-volunteer/:id',
        element: <PrivateRoute><BeAVolunteer></BeAVolunteer></PrivateRoute>
      },
      {
        path: 'detailsInfo/:id',
        element: <DetailsInfo></DetailsInfo>
      },
      {
        path: '/need-volunteer',
        element: <NeedVolunteer></NeedVolunteer>
      },
      {
        path: '/add-volunteer',
        element: <PrivateRoute><AddVolunteerPost></AddVolunteerPost></PrivateRoute>
      },
      {
        path: '/country-details',
        element: <AnotherPostDetails></AnotherPostDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider><RouterProvider router={router} /></HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
