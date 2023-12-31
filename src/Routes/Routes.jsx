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
import UpdateToys from "../Pages/UpdateToy/UpdateToys";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Shared/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
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
            path:'/toysDetail/:id',
            element:(
                <PrivateRouter>
                    <ToysDetails></ToysDetails>
                </PrivateRouter>
            ),
            loader:({params})=>fetch(`https://toy-market-place-server-jonaiedhasan.vercel.app/allToys/${params.id}`)
        },
        {
            path:'/myToys',
            element:<PrivateRouter>
                <MyToys></MyToys>
            </PrivateRouter>
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
        },
        {
            path:'/updateToy/:id',
            element:<UpdateToys></UpdateToys>,
            loader:({params})=>fetch(`https://toy-market-place-server-jonaiedhasan.vercel.app/Toys/${params.id}`)
        }

      ]
    },
  ]);

  export default router;