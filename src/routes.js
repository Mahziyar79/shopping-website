import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";
import SignupPage from "./Pages/SignupPage";

const routes = [
    { path: "/cart", element: <CartPage /> },
    { path: "/checkout", element: <CheckoutPage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/signup", element: <SignupPage /> },
    { path: "/", element: <HomePage />},
    { path:"*" , element: <NotFoundPage /> },
  ];
  
  export default routes;