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
        element: <Dashboard></Dashboard>
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
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
