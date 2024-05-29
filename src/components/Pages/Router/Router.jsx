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
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import Watch from '../Watch/Watch';

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
        path: '/updateProduct/:id',
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/watches/${params.id}`),
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: () => fetch('http://localhost:5000/orders'),
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
        path: '/watch',
        element: <Watch></Watch>,
      },
      {
        path: '/details/:id',
        element: (
          <PrivateRoute>
            <WatchCardDetails></WatchCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/watches/${params.id}`),
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
