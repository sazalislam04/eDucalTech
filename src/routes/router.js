import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Courses from "../components/Courses";
import Error from "../components/Error";
import Home from "../components/Home";
import Root from "../components/Root";

export const router = createBrowserRouter([
  //   { path: "/", element: <Home /> },
  {
    path: "/",
    element: <Root />,
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
    ],
  },
]);
