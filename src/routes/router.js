import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Cart from "../components/Cart";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Error from "../components/Error";
import Home from "../components/Home";
import Login from "../components/Login";
import Pricing from "../components/Pricing";
import Review from "../components/Review";
import Root from "../components/Root";
import { loadData } from "../loaders/loadData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loadData,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/price",
        element: <Pricing />,
      },
    ],
  },

  {
    path: "/review",
    element: <Review />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
