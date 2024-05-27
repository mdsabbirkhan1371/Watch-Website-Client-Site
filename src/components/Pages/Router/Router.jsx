import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Root/Root';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Home from '../Home/Home';
import AddProduct from '../AddProduct/AddProduct';
import UpdateProduct from '../UpdateProduct/UpdateProduct';
import Orders from '../Orders/Orders';
import Contact from '../Contact/Contact';
import Watches from '../../Shared/Watches/Watches';
import WatchCardDetails from '../WatchCardDetails/WatchCardDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/updateProduct',
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/watches',
        element: <Watches></Watches>,
      },
      {
        path: '/details/:id',
        element: <WatchCardDetails></WatchCardDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/watches/${params.id}`),
      },
    ],
  },
]);
