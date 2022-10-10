import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDb } from "../fakeDB/fakeBD";
import Course from "./Course";
import { CartContext, CoursesContext } from "./Root";

const Courses = () => {
  const courses = useContext(CoursesContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToDb = (course) => {
    let newCart = [];
    const existsCart = cart.find((item) => item.id === course.id);
    if (!existsCart) {
      course.quantity = 1;
      newCart = [...cart, course];
    } else {
      const rest = cart.filter((item) => item.id !== course.id);
      existsCart.quantity = existsCart.quantity + 1;
      newCart = [...rest, existsCart];
    }
    setCart(newCart);
    addToDb(course.id);
    toast.success("Added Cart!!", { autoClose: 500 });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-12 w-full px-8 lg:w-11/12 mx-auto">
      {courses.map((course) => (
        <Course key={course.id} course={course} handleAddToDb={handleAddToDb} />
      ))}
    </div>
  );
};

export default Courses;
