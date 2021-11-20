import { NavLink } from "react-router-dom";
import "./Navigation.css";

const items = [
  { to: "/", name: "Home", exact: true },
  { to: "/cards", name: "Cards" },
];
const Navigation = (props) => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className='nav-link'
                  activeClassName="selected-nav"
                  exact={item.exact || false}
                >
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
