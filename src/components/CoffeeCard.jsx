import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const {_id, Photo, Price, name, quantity } = coffee;
  const handleDelete = (_id)=> {
    console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {
    Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    });
  }
});

  }
  return (
    
     
      <div className="card card-side bg-base-100 shadow-sm border-2">
        <figure>
          <img src={Photo} alt="Movie" />
        </figure>
        <div className="flex justify-around mt-8 w-full">
          <div>
            <h2 className="">Name: {name}</h2>
            <p> Quantity: {quantity}</p>
            <p>Price: {Price} taka</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-2">
              <button className="btn join-item">View</button>
              <button className="btn join-item">Edit</button>
              <button onClick={() => handleDelete(_id)} className="btn join-item">X</button>
            </div>
          </div>
        </div>
      </div>

  );
};

export default CoffeeCard;
