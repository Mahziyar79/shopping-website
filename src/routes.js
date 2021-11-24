import CartPage from "./Pages/CartPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";

const routes = [
    { path: "/cart", element: <CartPage /> },
    { path: "/", element: <HomePage />},
    { path:"*" , element: <NotFoundPage /> },
  ];
  
  export default routes;