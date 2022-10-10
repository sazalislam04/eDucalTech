import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const CoursesContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const { courses, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  return (
    <CoursesContext.Provider value={courses}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </CoursesContext.Provider>
  );
};

export default Root;
