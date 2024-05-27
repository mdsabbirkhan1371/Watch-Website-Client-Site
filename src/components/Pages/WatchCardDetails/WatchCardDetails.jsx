import { useLoaderData } from 'react-router-dom';

const WatchCardDetails = () => {
  const watch = useLoaderData();
  console.log(watch);
  const { _id, name, photo, description, price, quantity, sellerName } = watch;

  return (
    <div>
      <div className="md:flex p-12 justify-evenly ">
        <div className="p-3">
          <img className=" w-80" src={photo} alt="" />
        </div>
        <div className="space-y-2 p-3">
          <h1 className="text-2xl font-bold">Name: {name}</h1>
          <p>Price: {price} Tk</p>
          <p>Available Product: {quantity}</p>
          <p>Seller: {sellerName}</p>
          <button className="btn btn-block btn-error btn-sm text-white font-bold">
            Order Now
          </button>
        </div>
      </div>
      <p className=" mb-12 px-5">
        <span className="font-bold text-xl underline mr-3">Details:</span>
        {description}
      </p>
    </div>
  );
};

export default WatchCardDetails;
