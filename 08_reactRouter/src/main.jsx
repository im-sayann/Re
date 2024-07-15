import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home, About, Contact, Layout, Sayan, Boss } from "./components/index.js";
import "./index.css";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // The Header and Footer stays still Outlet will be change
//     children: [
//       // Which childrens to render
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about", // Path ( "/" is already there )
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />}>
        <Route path="sayan" element={<Sayan/>}/>
        <Route path="boss" element={<Boss/>}/>
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={githubInfoLoader} // accessing fetch function
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
