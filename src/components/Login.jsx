import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setLogin] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.value;
    const password = e.target.value;
    if (email === "sazal@gmail.com" || password === "sazal") {
      setLogin(email, password);
    }
  };

  const handleClick = () => {
    if (login) {
      toast.success("Successfully placed in order", { autoClose: 700 });
    } else {
      toast.warning("please enter email and password", { autoClose: 500 });
    }
  };

  return (
    <div className="flex flex-col w-full mx-auto mt-20 rounded max-w-md p-12 space-y-4 text-center text-gray-900 bg-gray-200 shadow-xl">
      <h1 className="text-3xl font-semibold">Sign in to your account</h1>
      <a className="text-sm text-gray-400" href="/">
        Or start your free trial
      </a>
      <form
        novalidate=""
        className="space-y-4 ng-untouched ng-pristine ng-valid"
      >
        <form onChange={(e) => handleSubmit(e)} className="flex flex-col">
          <label for="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email: sazal@gmail.com"
            className="p-2 focus:outline-none border border-violet-400 rounded focus:shadow-xl mb-5"
          />
          <label for="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            type="text"
            placeholder="Password: sazal"
            className="p-2 focus:outline-none border border-violet-400 rounded focus:shadow-xl mb-5"
          />
          <div className="flex mb-3 justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-sm focus:ring-violet-400 focus:border-violet-400 focus:ring-2 accent-violet-600"
              />
              <label for="remember checked" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <Link className="text-sm text-blue-500" to="">
              Forgot your password?
            </Link>
          </div>
          <Link to={login ? "/cart" : "/login"}>
            <button
              onClick={handleClick}
              type="button"
              className="px-8 py-3 space-x-2 font-semibold border rounded bg-violet-400 text-white hover:border hover:border-violet-500 hover:bg-transparent hover:text-gray-900 transition duration-300"
            >
              Sign in
            </button>
          </Link>
        </form>
      </form>
    </div>
  );
};

export default Login;
