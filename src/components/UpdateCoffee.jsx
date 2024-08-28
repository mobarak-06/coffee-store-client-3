import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, quantity, supplier, taste, category, details, photo } =
  coffee;
  const handleUpdateCoffee = (e) => {
      e.preventDefault();
  
      const form = e.target;
  
      const name = form.name.value;
      const quantity = form.quantity.value;
      const supplier = form.supplier.value;
      const taste = form.taste.value;
      const category = form.category.value;
      const details = form.details.value;
      const photo = form.photo.value;
  
      const updatedCoffee = {
        name,
        quantity,
        supplier,
        taste,
        category,
        details,
        photo,
      };
      console.log(updatedCoffee);

      fetch(`http://localhost:5000/coffees/${_id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedCoffee)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated Success!",
              text: "Your coffee has been Updated.",
              icon: "success"
            });
           
        }
      })
    }
  return (
    <div
      className="md:w-[1200px] w-[650px]
          h-[765px] bg-[#F4F3F0] md:mx-auto   md:p-24"
    >
      <h1 className="text-6xl font-bold md:text-center">Update Coffee</h1>
      <form onSubmit={handleUpdateCoffee}>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-3/4 md:w-full"
              name="name"
              defaultValue={name}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-3/4 md:w-full"
              name="quantity"
              defaultValue={quantity}
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="supplier"
              name="supplier"
              className="input input-bordered w-3/4 md:w-full"
              defaultValue={supplier}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Taste"
              name="taste"
              className="input input-bordered w-3/4 md:w-full"
              defaultValue={taste}
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              name="category"
              className="input input-bordered w-3/4 md:w-full"
              defaultValue={category}
              required
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              name="details"
              className="input input-bordered w-3/4 md:w-full"
              defaultValue={details}
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="photo"
              className="input input-bordered w-3/4 md:w-full"
              defaultValue={photo}
              required
            />
          </div>
        </div>
        <input
          className="btn mt-6 w-3/4 md:w-full bg-[#D2B48C]"
          type="submit"
          value="Update Coffee"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;
