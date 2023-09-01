import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Layout/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Restaurant from './Components/Restaurant/Restaurant.jsx';
import Login from './Components/Login/Login.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import NotFound from './Components/NotFound/NotFound.jsx';
import Users from './Components/Users/Users.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';



const router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home> 
      },
      {
        path:'/restaurant',
        element:<Restaurant></Restaurant>,
        loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      },
      {
        path:'/users',
        element:<Users></Users>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users') 
      },
      {
        path:'/user/:userId',
        element:<UserDetails></UserDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
       
         
      },
      {
        path:'/login',
        element:<Login></Login> 
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/about',
        element:<About></About> 
      },
      {
        path:'*',
        element:<NotFound></NotFound> 
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} /> 
  </React.StrictMode>,
)
