import React, { use } from "react";
import { AuthContex } from "../contexts/AuthContext";
import Swal from "sweetalert2";

const SingUp = () => {
  const { createUser } = use(AuthContex);
  console.log(createUser);

  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    

    // console.log(email, password, userProfile);

    //create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
            email,
            ...restFormData,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime,
        }

        //seve profile info in the db
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleSingUp} className="fieldset">
          <label className="label">name</label>
          <input
            type="text"
            name="name"
            className="input"
            placeholder="Your Name"
          />
          <label className="label">address</label>
          <input
            type="text"
            name="address"
            className="input"
            placeholder="your address"
          />
          <label className="label">phone</label>
          <input
            type="text"
            name="phone"
            className="input"
            placeholder="your phone"
          />
          <label className="label">Photo</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="your photo"
          />
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">SingUp</button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
