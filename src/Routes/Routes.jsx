import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blogs from "../Pages/Blogs/Blogs";
import AddToys from "../Pages/AddToys/AddToys";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ToysDetails from "../Pages/AllToys/ToysDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/allToys',
            element:<AllToys></AllToys>
        },
        {
            path:'/allToys/:id',
            element:<ToysDetails></ToysDetails>,
            loader:({params})=>fetch(`http://localhost:5173/allToys/${params.id}`)
        },
        {
            path:'/myToys',
            element:<MyToys></MyToys>
        },
        {
            path:'/addToys',
            element:<AddToys></AddToys>
        },
        {
            path:'/blog',
            element:<Blogs></Blogs>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }

      ]
    },
  ]);

  export default router;