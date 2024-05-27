
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root/Root";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../Home/Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);


