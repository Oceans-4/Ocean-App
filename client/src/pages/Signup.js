import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_PROFILE } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    // <main className="flex flex-wrap justify-center pb-24">
      <div className=" w-5/12 max-lg:w-9/12 max-sm:w-full mx-7 pt-8 mt-20  glass">
        <h4 className="text-center text-4xl font-bold text-[#0B2447]">Sign Up</h4>

        {data ? (
          <p>
            Success! You may now head <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleFormSubmit}>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold text-white">Username</label>
              <input className="rounded-lg py-2 w-full" placeholder=" Your username" name="name" type="text" value={formState.name} onChange={handleChange} />
            </div>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold text-white">Email</label>
              <input className="rounded-lg py-2 w-full" placeholder=" Your email" name="email" type="email" value={formState.email} onChange={handleChange} />
            </div>
            <div className="m-8 py-4 max-sm:m-3 max-sm:py-1">
              <label className="font-bold text-white">Password</label>
              <input className="rounded-lg py-2 w-full" placeholder=" ******" name="password" type="password" value={formState.password} onChange={handleChange} />
            </div>

            <button className="bg-blue-500 text-white text-3xl p-3 m-4 font-bold rounded-md" style={{ cursor: "pointer" }} type="submit">
              Submit
            </button>
          </form>
        )}

        {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
      </div>
    // </main>
  );
};

export default Signup;
