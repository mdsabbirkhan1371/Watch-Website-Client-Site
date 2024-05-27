import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Watch = ({ watch }) => {
  console.log(watch);
  const { _id, name, photo, price, sellerName } = watch;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Watch" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <div className="flex text-green-300 items-center">
          <p className="">Price: {price} Tk</p>
          <p>Seller Name: {sellerName}</p>
        </div>
        <div className="card-actions">
          <button className="btn w-full btn-error font-bold text-white">
            <Link to={`/details/${_id}`}>See Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;

// proTypes check
Watch.propTypes = {
  watch: PropTypes.object,
};
