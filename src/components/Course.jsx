import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course, handleAddToDb }) => {
  const { author, lesson, name, picture, price, rating } = course;
  return (
    <div
      className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-gray-100 text-gray-800"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <div className="flex items-center space-x-4">
        <img
          alt=""
          src={author.img}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="/"
            className="text-sm font-semibold"
          >
            {author.name}
          </a>
          <span className="text-xs dark:text-gray-400">
            Published Date: {author.date}
          </span>
        </div>
      </div>
      <div>
        <img
          src={picture}
          alt=""
          className="object-cover w-full mb-4  shadow-md h-60 sm:h-96 bg-gray-500"
        />
        <div className="flex justify-between items-center mt-5">
          <p className="flex items-center text-blue-500">
            <span className="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </span>
            {lesson}
          </p>
          <p className="flex items-center text-red-500">
            {rating}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </p>
        </div>
        <h2 className="mb-1 mt-1 text-xl font-semibold">{name}</h2>
        <p className="text-lg m-0 font-semibold text-red-500">
          Price: {price}$
        </p>
      </div>
      <div className="flex flex-wrap justify-between relative ">
        <div className="space-x-2">
          <button
            onClick={() => handleAddToDb(course)}
            aria-label="Share this post"
            type="button"
            className="bg-violet-500 text-white px-6 py-1 rounded flex items-center"
          >
            <span className="mr-2 uppercase">Cart</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
          </button>
        </div>
        <div className="space-x-2">
          <Link to="/review">
            <button
              type="button"
              className="bg-blue-500 text-white px-6 py-1 rounded flex items-center"
            >
              <span className="uppercase mr-2">Review</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
