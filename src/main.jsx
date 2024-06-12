import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import ErrorPage from './Components/ErrorPage';
import Updates from './Components/Updates';
import AuthProvider from './Providers/AuthProvider';
import Details from './Components/Details';
import { HelmetProvider } from 'react-helmet-async';
import PrivateRoute from './Components/PrivateRoute';
import DetailsInfo from './Components/DetailsInfo';
import AddVolunteerPost from './Components/AddVolunteerPost';
import ManageMyPost from './Components/ManageMyPost';
import BeAVolunteer from './Components/BeAVolunteer';
import UpdatePost from './Components/UpdatePost';
import AnotherPostDetails from './Components/AnotherPostDetails';
import Home from './Components/Pages/HomePage/Home';
import DonationRequest from './Components/Pages/DonationRequests/DonationRequest';
import BLog from './Components/Pages/Blog/BLog';
import Login from './Components/Pages/UserSection/Login'
import Reg from './Components/Pages/UserSection/Reg'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Funding from './Components/Pages/Funding/Funding';
import Dashboard from './Components/Dashboard/Dashboard';
import AllUser from './Components/Dashboard/AdminDashboard/AllUser';
import AllDonationRequest from './Components/Dashboard/AdminDashboard/AllDonationRequest';
import ContentManagement from './Components/Dashboard/AdminDashboard/ContentManagement';
import MyDonationRequest from './Components/Dashboard/DonorDashboard/MyDonationRequest';
import CreateDonationRequest from './Components/Dashboard/DonorDashboard/CreateDonationRequest';
import DashboardHome from './Components/Dashboard/DonorDashboard/DashboardHome';
import RequestCardUpdate from './Components/Dashboard/DonorDashboard/RequestCardUpdate';
import ReqCardDetails from './Components/Dashboard/DonorDashboard/ReqCardDetails';
import DonationCardDetails from './Components/Pages/DonationRequests/DonationCardDetails';
import UserProfile from './Components/Dashboard/UserProfile';

const queryClient = new QueryClient();

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
        path: '/donation-requests',
        element: <DonationRequest></DonationRequest>
      },
      {
        path: '/add-volunteer',
        element: <PrivateRoute><AddVolunteerPost></AddVolunteerPost></PrivateRoute>
      },
      {
        path: '/country-details',
        element: <AnotherPostDetails></AnotherPostDetails>
      },
      {
        path: '/blog',
        element: <BLog></BLog>
      },
      {
        path: '/funding',
        element: <Funding></Funding>
      },
      {
        path: '/donationDetails/:id',
        element: <PrivateRoute><DonationCardDetails></DonationCardDetails></PrivateRoute>,
      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "user-profile",
        element: <UserProfile></UserProfile>
      },
      // Admin routes --------------------------
      {
        path: "all-user",
        element: <AllUser></AllUser>
      },
      {
        path: "all-donation-request",
        element: <AllDonationRequest></AllDonationRequest>
      },
      {
        path: "content-management",
        element: <ContentManagement></ContentManagement>
      },

      // Donor Routes ----------------------------------
      {
        path: "my-donation-request",
        element: <MyDonationRequest></MyDonationRequest>
      },
      {
        path: "create-donation-request",
        element: <PrivateRoute><CreateDonationRequest></CreateDonationRequest></PrivateRoute>
      },
      {
        path: "request-card-update/:id",
        element: <RequestCardUpdate></RequestCardUpdate>
      },
      {
        path: 'reqDetails/:id',
        element: <PrivateRoute><ReqCardDetails></ReqCardDetails></PrivateRoute>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}><HelmetProvider><RouterProvider router={router} /></HelmetProvider></QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
