import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Teams from './Pages/Teams.jsx'
import Contact from './Pages/Contact.jsx'
import Event from './Pages/Event.jsx'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :
    [
      {
      path : "/",
      element : < Home />
     },
     {
      path : "/about",
      element : < About />
     },
     {
      path : "/teams",
      element : < Teams />
     },
     {
      path : "/contact",
      element : < Contact />
     },
     {
      path : "/Event",
      element : < Event />
     },
     
   ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
