import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useCart } from "../../Context/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const auth = useAuth();
  console.log(auth);
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
          <div className="left-nav">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
          </div>
          <div className="right-nav">
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
                {auth ? "Profile" : "Login/Signup"}
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
