import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home, About, Layout, Contact} from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // The Header and Footer stays still Outlet will be change
    children: [
      // Which childrens to render
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about", // Path ( "/" is already there )
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
