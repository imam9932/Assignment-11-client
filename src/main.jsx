import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layout/MainLayout/MainLayout.jsx';
import Home from './Components/Home/Home.jsx';
import AllTicket from './Components/AllTicket/AllTicket.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Register from './Pages/AuthPages/Register.jsx';
import Login from './Pages/AuthPages/Login.jsx';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Context/AuthProvider.jsx';
import VendorProfile from './Pages/DashboardPages/VendorProfile.jsx';
import AddTickets from './Form/AddTickets.jsx';
import MyAddedTickets from './Pages/DashboardPages/MyAddedTickets.jsx';
import UpdateTickets from './Pages/DashboardPages/UpdateTickets.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout></MainLayout>,
    children:[
       {
        index:true,
        path:"/",
        element:<Home></Home>
       },
       {
        
        path:"/all-ticket",
        element: <AllTicket></AllTicket>
       },
       {
         
        path:"/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            index:true,
            path:'vendor-profile',
            element:<VendorProfile></VendorProfile>
          },
          {
            path:'add-tickets',
            element: <AddTickets></AddTickets>
          },
          {
            path:'my-added-tickets',
            element:  <MyAddedTickets></MyAddedTickets>
          },
          {
            path:'update-tickets',
            element:  <UpdateTickets></UpdateTickets>
          }
        ]
       },
       {
         
        path:"/register",
        element:  <Register></Register>
       },
       {
         
        path:"/login",
        element:   <Login></Login>
       },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <StrictMode>
    <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>
  </AuthProvider>,
  </QueryClientProvider>

)
