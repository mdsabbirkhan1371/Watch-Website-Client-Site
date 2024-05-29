import React from 'react';

const OrderDetails = ({ order }) => {
  const { photo, price, name } = order;
  return (
    <table className="border w-full p-5">
      <tr className="border">
        <th className="w-36 border">Photo</th>
        <th className="w-36 border">Name</th>
        <th className="w-36 border">Price</th>
        <th className="w-36 border">Manage</th>
      </tr>
      <tr>
        <td>
          <img className="w-24 p-2 rounded-full" src={photo} alt="" />
        </td>
        <td className="border p-5">{name}</td>
        <td className="border p-7">{price}TK</td>
        <td className="p-5">
          <button className="btn btn-sm btn-primary mr-3 ">Cancel</button>
          <button className="btn btn-sm btn-primary">Confirmed</button>
        </td>
      </tr>
    </table>
  );
};

export default OrderDetails;
