import Cards from "./Pages/Cards";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

const routes = [
    { path: "/cards", element: <Cards /> },
    { path: "/", element: <HomePage />, exact: true },
    { element: <NotFoundPage /> },
  ];
  
  export default routes;