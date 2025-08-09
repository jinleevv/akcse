import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "@/pages/Home";
// import About from "@/pages/About"
import Events from "@/pages/Events";
import Executives from "@/pages/Executives";
import Projects from "@/pages/Projects";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "events", element: <Events /> },
      { path: "executives", element: <Executives /> },
      { path: "projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
