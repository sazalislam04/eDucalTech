import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteDataFromStorage, removeFromDb } from "../fakeDB/fakeBD";
import CartItem from "./CartItem";
import { CartContext } from "./Root";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  cart.sort((a, b) => b.quantity - a.quantity);

  const handleRemoveCart = (id) => {
    setTimeout(() => {
      const remaining = cart.filter((item) => item.id !== id);
      setCart(remaining);
      removeFromDb(id);
    }, 1000);
    toast.error("removing item", { autoClose: 500 });
  };

  let total = 0;
  for (const price of cart) {
    total += total + price.price * price.quantity;
  }

  const removeData = () => {
    if (cart.length === 0) {
      toast.warning("Cart is Empty!! please back to Courses and add to cart", {
        autoClose: 1000,
      });
    } else {
      setCart([]);
      deleteDataFromStorage();
    }
  };

  return (
    <div className="flex flex-col mx-auto max-w-3xl shadow-xl p-6 mt-6 mb-6 rounded space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-semibold text-center">
        {cart.length ? "Review Your Cart" : "Your cart is Empty!"}
      </h2>
      <ul className="flex flex-col divide-y divide-gray-700">
        {cart.map((course) => (
          <CartItem
            key={course.id}
            course={course}
            handleRemoveCart={handleRemoveCart}
          />
        ))}
      </ul>
      <div className="space-y-1 text-center">
        <p className="text-xl">
          Total amount:
          <span className="font-semibold"> {total}$</span>
        </p>
        <p className="text-sm dark:text-gray-400">
          Not including taxes and shipping costs
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <Link to="/courses">
          <button
            type="button"
            className="px-6 py-2 border rounded-md border-violet-400"
          >
            Back
            <span className="sr-only sm:not-sr-only"> to Courses</span>
          </button>
        </Link>
        <Link to={cart.length === 0 ? "/cart" : "/login"}>
          <button
            onClick={removeData}
            type="button"
            className="px-6 py-2 border rounded-md bg-violet-400 text-gray-100 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Placed Order</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
