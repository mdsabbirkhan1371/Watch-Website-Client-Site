import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const WatchCardDetails = () => {
  const watch = useLoaderData();

  const { _id, name, photo, description, price, quantity, sellerName } = watch;

  const handleOrder = id => {
    console.log(id);
    const watchDetails = { name: name, photo: photo, price: price };
    try {
      fetch(
        `https://watch-websites-server-site-4fm7hh36b-md-sabbir-khans-projects.vercel.app/watches/${id}`,
        {
          credentials: 'include',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(watchDetails),
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Your Order has been placed',
              showConfirmButton: true,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        try {
          fetch(
            `https://watch-websites-server-site-4fm7hh36b-md-sabbir-khans-projects.vercel.app/watches/${id}`,
            {
              method: 'DELETE',
            }
          )
            .then(res => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your Product has been deleted.',
                  icon: 'success',
                });
              }
            });
        } catch (err) {
          console.error(err);
        }
      }
    });
  };

  return (
    <div>
      <div className="md:flex p-12 justify-evenly ">
        <div className="p-3">
          <img className=" w-80" src={photo} alt="" />
        </div>
        <div className="space-y-2 p-3 flex justify-around">
          <div>
            <h1 className="text-2xl font-bold">Name: {name}</h1>
            <p>Price: {price} Tk</p>
            <p>Available Product: {quantity}</p>
            <p>Seller: {sellerName}</p>

            <div className="join join-vertical mt-10 space-y-2">
              <button className="btn join-item btn-success">
                <Link to={`/updateProduct/${_id}`}>Update</Link>
              </button>
              <button
                onClick={() => handleDelete(_id)}
                className="btn join-item btn-error"
              >
                Delete
              </button>
              <button
                onClick={() => handleOrder(_id)}
                className="btn btn-primary join-item"
              >
                Order Now
              </button>
            </div>
          </div>
          <div></div>
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
