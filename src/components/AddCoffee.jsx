import React from "react";

const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault()
        const form = e.target; 
    }
  return (
    <div className="p-24">
      <div className="p-12 text-center space-y-4">
        <h1 className="text-6xl">Add New Coffee</h1>
        <p>
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter coffee name"
            />  
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Chef</label>
            <input
              type="text"
              name="Chef"
              className="input w-full"
              placeholder="Enter coffee chef"
            />  
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Supplier</label>
            <input
              type="text"
              name="Supplier"
              className="input w-full"
              placeholder="Enter coffee supplier"
            />  
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Taste</label>
            <input
              type="text"
              name="Taste"
              className="input w-full"
              placeholder="Enter coffee taste"
            />  
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Category</label>
            <input
              type="text"
              name="Category"
              className="input w-full"
              placeholder="Enter coffee category"
            />  
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">

            <label className="label">Details</label>
            <input
              type="text"
              name="Details"
              className="input w-full"
              placeholder="Enter coffee details"
            />  
          </fieldset>
          
         
        </div>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">

            <label className="label">Photo</label>
            <input
              type="text"
              name="Photo"
              className="input w-full"
              placeholder="Enter photo URL"
            />  
          </fieldset>
          <input type="submit" className="btn w-full" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
