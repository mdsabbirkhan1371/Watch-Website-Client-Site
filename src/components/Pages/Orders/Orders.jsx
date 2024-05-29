import { useLoaderData } from 'react-router-dom';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
  const orders = useLoaderData();
  return (
    <div>
      <h3 className="text-center text-3xl text-indigo-500 my-10">
        Total order Placed: {orders.length}
      </h3>

      <div>
        {orders.map(order => (
          <OrderDetails order={order} key={order._id}></OrderDetails>
        ))}
      </div>
    </div>
  );
};

export default Orders;
