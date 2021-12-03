import { NavLink } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useCart } from "../../Context/CartProvider";
import ProfileBtn from "../ProfileBtn/ProfileBtn";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const auth = useAuth();
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
            <li className={auth ? "Profile-btn" : ""}>
              {auth ? (
                <ProfileBtn />
              ) : (
                <NavLink
                  to={"/login"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {"Login/Signup"}
                </NavLink>
              )}
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
