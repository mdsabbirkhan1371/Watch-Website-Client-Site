const UpdateProduct = () => {
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
  };
  return (
    <div>
      <form onSubmit={handleUpdateProduct} className="card-body">
        <h3 className="text-center my-3 text-2xl text-indigo-500 font-semibold">
          Please Update Your Product Information of :
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
