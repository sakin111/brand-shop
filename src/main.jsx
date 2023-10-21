import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import AddProduct from './component/AddProduct/AddProduct';
import MyCard from './component/MyCard/MyCard';
import Login from './component/Login/Login';
import LogOut from './component/LogOut/LogOut';
import Cards from './component/Card/Cards';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/addProduct",
        element:<AddProduct></AddProduct>,
      },
      {
        path:"/myCard",
        element:<MyCard></MyCard>,
        loader:() => fetch('http://localhost:5000/brand')
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/logOut",
        element:<LogOut></LogOut>,
      },
      {
        path:"/card",
        element:<Cards></Cards>,
  
      }
    
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
