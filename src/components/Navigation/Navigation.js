import { NavLink } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const sumQuantityNav = () => {
    const updatedCart = [...cart];
    const reducer = (accumulator, curr) => accumulator + curr.quantity;
    const totalCartPrice = updatedCart.reduce(reducer, 0);
    return totalCartPrice;
  };
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="cart-nav">
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cards
            </NavLink>
            <span className="quantity-nav">{sumQuantityNav()}</span>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Login/Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
