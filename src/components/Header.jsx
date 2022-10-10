import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "./Root";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cart] = useContext(CartContext);

  return (
    <header className="p-4 shadow-md">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to="/" className="flex  items-center p-2 text-3xl font-medium">
          {open ? (
            ""
          ) : (
            <span>
              eDucal<span className="text-blue-500">Tech</span>
            </span>
          )}
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              to="/"
              className={`flex items-center px-4 text-xl ${({ isActive }) =>
                isActive ? "active" : undefined}`}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/courses"
              className={`flex items-center px-4 text-xl ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              Courses
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/about"
              className={`flex items-center px-4 text-xl ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              About
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              to="/contact"
              className={`flex items-center px-4 text-xl ${({ isActive }) =>
                isActive ? "active" : undefined}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <Link to="/login">
            <button className="self-center px-4 py-2 border-violet-400 hover:bg-violet-500 transition duration-300 hover:text-white text-gray-800 border rounded flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
              <span className="ml-2 text-xl">Login</span>
            </button>
          </Link>
          <Link to="/cart">
            <button className="self-center px-8 py-3 font-semibold rounded relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="absolute bottom-8 right-8 text-violet-500">
                {cart.length}
              </span>
            </button>
          </Link>
        </div>
        <button onClick={() => setOpen(true)} className="p-4 lg:hidden">
          {open ? (
            ""
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 bg-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </button>

        {open && (
          <div className="w-full sm:w-9/12 lg:hidden absolute top-10 left-[50%] translate-x-[-50%]">
            <div className="p-5 bg-white border rounded shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Link
                    to="/"
                    className="inline-flex p-2 text-3xl items-center"
                  >
                    <span className="text-blue-500">eDucal</span> Tech
                  </Link>
                </div>
                <div>
                  <button
                    className="p-4 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    onClick={() => setOpen(false)}
                  >
                    <svg className="w-6 h-6 bg-gray-100" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <NavLink
                      to="/"
                      className="font-medium tracking-wide text-2xl text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      end
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      className="font-medium tracking-wide text-2xl text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Course
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="font-medium tracking-wide text-2xl text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className="font-medium tracking-wide text-2xl text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      <button className="self-center relative font-semibold rounded mt-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-8 h-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                        <span className="absolute bottom-6 left-6 text-violet-500">
                          0
                        </span>
                      </button>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
