import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Layout from "../Layout.jsx";

import HomePage from "./components/Home/HomePage.jsx";
import AboutPage from "./components/About/AboutPage.jsx";
import ContactPage from "./components/Contact/ContactPage.jsx";
import ProjectPage from "./components/Projects/ProjectPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route index element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Projects" element={<ProjectPage />} />
      <Route path="/ContactMe" element={<ContactPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
