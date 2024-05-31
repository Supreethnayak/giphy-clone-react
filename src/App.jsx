import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app.layout";
import Home from "./pages/home";
import Category from "./pages/category";
import Search from "./pages/search";
import GifPage from "./pages/single-gif";
import Favorites from "./pages/favorites";
import GifProvider from "./context/gif-context";

// 1. create routes using createBrowserRouter
// 2. send router variable to RouterProvider

// one of way to write routes
const routes = createBrowserRouter([
  {
    element: <AppLayout />,
    // errorElement - if any error occurs in children
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category", // slug - can be anaything, anything can come up
        element: <Category />,
      },
      {
        path: "/search/:query", // slug - can be query, anything can come up
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);
function App() {
  return (
    /* whole app will have access to data, which 
    GifProvider is sending */
    <GifProvider>
      <RouterProvider router={routes} />
    </GifProvider>
  );
}

export default App;
