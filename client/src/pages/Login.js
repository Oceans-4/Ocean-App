import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import Signup from "./Signup";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* <img className="relative" style={{ height: "800px", width: "100%" }} src={dolphinsOne} /> */}
      <div className="pt-32 pb-5 bg-blue-700 text-center" />

      <main className="h-screen">
        <div>
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">Login</h4>
            <div className="card-body border border-solid rounded-lg p-5 glass">
              {data ? (
                <p>
                  Success! You may now head <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form className="flex flex-column" onSubmit={handleFormSubmit}>
                  <input className="form-input border border-solid" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange} />
                  <input className="form-input border border-solid" placeholder="******" name="password" type="password" value={formState.password} onChange={handleChange} />
                  <button className="btn btn-block btn-info border border-solid p-2 m-2 rounded-lg" style={{ cursor: "pointer" }} type="submit">
                    Submit
                  </button>
                </form>
              )}

              {error && <div className="my-3 p-3 bg-danger text-white">{error.message}</div>}
            </div>
          </div>
        </div>
        <Signup />
      </main>
    </>
  );
};

export default Login;
