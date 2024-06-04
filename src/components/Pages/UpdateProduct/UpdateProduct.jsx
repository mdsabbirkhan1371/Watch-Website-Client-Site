import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const watch = useLoaderData();
  const {
    name,
    photo,
    description,
    price,
    quantity,
    sellerName,
    deliveryType,
    _id,
  } = watch;

  console.log(watch);
  const handleUpdateProduct = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const sellerName = form.sellerName.value;
    const deliveryType = form.deliveryType.value;
    const photo = form.photo.value;

    const updateWatch = {
      name,
      price,
      description,
      quantity,
      sellerName,
      deliveryType,
      photo,
    };
    console.log(updateWatch);

    // update watch and send to server

    try {
      fetch(
        `https://watch-websites-server-site-4fm7hh36b-md-sabbir-khans-projects.vercel.app/watches/${_id}`,
        {
          credentials: 'include',
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(updateWatch),
        }
      )
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Your Product Has Been Updated',
              showConfirmButton: true,
            });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleUpdateProduct} className="card-body">
        <h3 className="text-center my-3 text-2xl text-indigo-500 font-semibold">
          Please Update Your Product Information of : {name}
        </h3>
        {/* watch name and price  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Watch Name</span>
            </label>
            <input
              type="text"
              placeholder="Watch Name"
              name="name"
              defaultValue={name}
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              defaultValue={price}
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
        </div>
        {/* Description name and Quantity  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Watch Description"
              name="description"
              defaultValue={description}
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Available Product</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              placeholder="Quantity"
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
        </div>
        {/* Seller name and Delivery type  */}
        <div className="md:flex gap-4">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              placeholder="Seller Name"
              defaultValue={sellerName}
              name="sellerName"
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Delivery Type</span>
            </label>
            <input
              type="text"
              name="deliveryType"
              placeholder="Delivery Type"
              defaultValue={deliveryType}
              className="input input-bordered focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            name="photo"
            defaultValue={photo}
            className="input input-bordered focus:border-indigo-500"
            required
          />
        </div>

        <div className="form-control mt-6">
          <input
            type="submit"
            className="btn btn-block"
            value="Update Watch Now"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
