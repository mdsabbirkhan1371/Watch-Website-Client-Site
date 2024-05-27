import PropTypes from 'prop-types';

const Watch = ({ watch }) => {
  console.log(watch);
  const { name, photo, description, price } = watch;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={photo} alt="Watch" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{name}</h2>
        <p className="text-green-300">Price: {price} Tk</p>
        <p>{description.slice(0, 50)}</p>
        <div className="card-actions">
          <button className="btn btn-success w-full">See Details</button>
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
